"use client";

import type { Country } from "@data/countries";

export default function CountryChart({ data }: { data: Country[] }) {
  // finer maksverdi
  const max = Math.max(...data.map((d) => d.tPerCapita));

  return (
    // liste med land
    <div className="space-y-3 w-full max-w-2xl mx-auto px-3 sm:px-0">
      {data.map((c) => {
        const w = Math.round((c.tPerCapita / max) * 100);

        return (
          // hver land
          <div key={c.name} className="rounded-lg border p-3">
            {/* navn og tall */}
            <div className="flex items-center justify-between text-sm mb-2">
              <span>{c.name}</span>
              <span className="tabular-nums">{c.tPerCapita} t</span>
            </div>

            {/* bar */}
            <div className="h-3 bg-gray-600 rounded">
              <div
                className="h-3 rounded bg-red-800"
                style={{ width: `${w}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
