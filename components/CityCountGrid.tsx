"use client";

import { useState } from "react";

interface Props {
  cities: [string, number][];
}

export default function CityCountGrid({ cities }: Props) {
  const [expanded, setExpanded] = useState(false);

  const top10 = cities.slice(0, 10);
  const rest = cities.slice(10);
  const visible = expanded ? cities : top10;

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {visible.map(([city, count]) => (
          <div
            key={city}
            className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center"
          >
            <p className="text-[#F5821F] font-bold text-xl">{count}</p>
            <p className="text-[#1B2A4A] text-xs font-medium mt-0.5">{city}</p>
          </div>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#F5821F] text-[#1B2A4A] hover:text-[#F5821F] font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm transition-all duration-200"
          >
            <span>
              {expanded
                ? "Show less"
                : `+ ${rest.length} more area${rest.length !== 1 ? "s" : ""} we service`}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
