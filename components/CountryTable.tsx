import type { Country } from '@data/countries';

export default function CountryTable({ data }: { data: Country[] }) {
  return (
    <div className="rounded-xl border  overflow-hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2 px-4 py-3 bg-border font-semibold">
        <div>Land</div>
        <div>CO2 / person</div>
      </div>
      <div className="divide-y">
        {data.map((c, i) => (
          <div
            key={c.name}
            className="grid grid-cols-[1fr_auto] items-center px-4 py-3"
          >
            <div className="flex items-center gap-4">
              <span className="w-6 text-right text-gray-400">{i + 1}.</span>
              <span>{c.name}</span>
            </div>
            <div className="tabular-nums text-red-600">{c.tPerCapita}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
