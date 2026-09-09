/**
 * One-time backfill script: geocodes all completed jobs in Supabase
 * that are missing map_lat / map_lng.
 *
 * Usage:
 *   node scripts/geocode-backfill.mjs
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *   GOOGLE_GEOCODING_API_KEY
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// Load .env.local manually (no dotenv dependency needed)
// ---------------------------------------------------------------------------
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "../.env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#"))
    .map((l) => l.split("=").map((p, i) => (i === 0 ? p.trim() : l.slice(l.indexOf("=") + 1).trim())))
);

const SUPABASE_URL = env["NEXT_PUBLIC_SUPABASE_URL"];
const SUPABASE_SERVICE_KEY = env["SUPABASE_SERVICE_ROLE_KEY"];
const GOOGLE_KEY = env["GOOGLE_GEOCODING_API_KEY"];

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !GOOGLE_KEY) {
  console.error("❌ Missing required env vars. Check .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Apply a random ±0.5 mile offset (~0.007 degrees) */
function applyOffset(coord) {
  return coord + (Math.random() - 0.5) * 0.014;
}

/** Format a date string as 'YYYY-MM' */
function toYearMonth(dateStr) {
  if (!dateStr) return null;
  return dateStr.slice(0, 7);
}

/** Geocode via Google Geocoding API with fallback strategies */
async function geocode(city, state, zip) {
  // Try most specific first, fall back to less specific
  const attempts = [
    [city, state, zip].filter(Boolean).join(" "),   // city + state + zip
    [city, state].filter(Boolean).join(", "),         // city + state
    zip,                                               // zip only
  ].filter(Boolean);

  for (const address of attempts) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === "OK" && data.results?.[0]) {
      return data.results[0].geometry.location; // { lat, lng }
    }
  }
  return null;
}

/** Sleep for ms milliseconds */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const BATCH_SIZE = 50;
const DELAY_MS = 200; // stay well within Google's 50 req/sec free tier

async function run() {
  console.log("🔍 Fetching completed jobs with missing coordinates...");

  // Fetch ALL jobs missing geocode that have at least a city or zip (any status)
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("id, city, state, zip, actual_end, updated_at")
    .is("map_lat", null)
    .or("city.not.is.null,zip.not.is.null");

  if (error) {
    console.error("❌ Failed to fetch jobs:", error.message);
    process.exit(1);
  }

  console.log(`✅ Found ${jobs.length} jobs to geocode.\n`);

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < jobs.length; i += BATCH_SIZE) {
    const batch = jobs.slice(i, i + BATCH_SIZE);
    console.log(`📦 Batch ${Math.floor(i / BATCH_SIZE) + 1} / ${Math.ceil(jobs.length / BATCH_SIZE)} (jobs ${i + 1}–${Math.min(i + BATCH_SIZE, jobs.length)})`);

    for (const job of batch) {
      if (!job.city && !job.zip) {
        skipped++;
        continue;
      }

      const location = await geocode(job.city, job.state, job.zip);

      if (!location) {
        console.warn(`  ⚠️  Could not geocode: ${job.city}, ${job.state} ${job.zip ?? ""}`);
        failed++;
        continue;
      }

      const map_lat = applyOffset(location.lat);
      const map_lng = applyOffset(location.lng);
      const completed_month = toYearMonth(job.actual_end ?? job.updated_at);

      const { error: updateError } = await supabase
        .from("jobs")
        .update({ map_lat, map_lng, completed_month })
        .eq("id", job.id);

      if (updateError) {
        console.warn(`  ❌ Update failed for job ${job.id}:`, updateError.message);
        failed++;
      } else {
        success++;
      }

      await sleep(DELAY_MS);
    }

    if (i + BATCH_SIZE < jobs.length) {
      console.log(`  ⏳ Pausing before next batch...\n`);
      await sleep(500);
    }
  }

  console.log("\n🎉 Backfill complete!");
  console.log(`   ✅ Geocoded: ${success}`);
  console.log(`   ⚠️  Skipped (no city): ${skipped}`);
  console.log(`   ❌ Failed: ${failed}`);
}

run().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
