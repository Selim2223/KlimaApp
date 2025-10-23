'use client';

import type { Country } from '@data/countries';

export default function CountryChart({ data }: { data: Country[] }) {
  const max = Math.max(...data.map((d) => d.tPerCapita));
  return (
    <div className="space-y-3">
      {data.map((c) => {
        const w = Math.round((c.tPerCapita / max) * 100);
        return (
          <div key={c.name} className="border-1  rounded-lg p-3">
            <div className="flex items-center justify-between text-sm mb-2">
              <span>{c.name}</span>
              <span className="tabular-nums">{c.tPerCapita} t</span>
            </div>
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
