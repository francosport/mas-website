"use client";

import dynamic from "next/dynamic";
import type { MapPin } from "@/lib/jobs";

const JobsMap = dynamic(() => import("@/components/JobsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#E2E6EC] animate-pulse flex items-center justify-center">
      <p className="text-gray-400 text-sm">Loading map…</p>
    </div>
  ),
});

export default function JobsMapDynamic({ pins }: { pins: MapPin[] }) {
  return (
    <JobsMap
      pins={pins}
      center={[38.886, -76.878]}
      zoom={10}
      height="100%"
    />
  );
}
