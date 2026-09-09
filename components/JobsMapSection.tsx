import { getCompletedJobPins, getJobCountsByCity } from "@/lib/jobs";
import JobsMapDynamic from "@/components/JobsMapDynamic";
import CityCountGrid from "@/components/CityCountGrid";

export default async function JobsMapSection() {
  const pins = await getCompletedJobPins();
  const cityCounts = getJobCountsByCity(pins);
  const total = pins.length;

  const sortedCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2
          className="font-heading text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          {total > 0 ? `${total}+ Jobs Completed Across the DMV` : "Serving the Greater DMV Area"}
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Every pin is a real repair completed by our technicians —
          approximate locations shown for privacy.
        </p>
      </div>

      <div className="w-full rounded-2xl overflow-hidden" style={{ height: "420px" }}>
        {total === 0 ? (
          <div className="w-full h-full bg-[#E2E6EC] flex items-center justify-center">
            <p className="text-gray-400 text-sm">Map data coming soon.</p>
          </div>
        ) : (
          <JobsMapDynamic pins={pins} />
        )}
      </div>

      {sortedCities.length > 0 && (
        <div className="hidden md:block">
          <CityCountGrid cities={sortedCities} />
        </div>
      )}
    </div>
  );
}
