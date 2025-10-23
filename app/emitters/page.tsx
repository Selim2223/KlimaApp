"use client";

import { useState } from "react";
import { countries } from "@data/countries";
import CountryTable from "@components/CountryTable";
import CountryChart from "@components/CountryChart";

export default function EmittersPage() {
  // bruker useState hook
  const [view, setView] = useState<"table" | "chart">("table");

  const showTable = view === "table";
  const showChart = view === "chart";

  return (
    <section className="max-w-3xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-bold text-center">
        Top 20 land med CO2 utslipp per inbygger
      </h1>

      {/* knapper – kolonne på mobil, rad på stor skjerm */}
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <button
          className={`btn btn-tab text-2xl w-full sm:w-auto ${
            showTable ? "btn-tab-active" : ""
          }`}
          onClick={() => setView("table")}
          aria-pressed={showTable}
        >
          Tabell
        </button>

        <button
          className={`btn btn-tab text-2xl w-full sm:w-auto ${
            showChart ? "btn-tab-active" : ""
          }`}
          onClick={() => setView("chart")}
          aria-pressed={showChart}
        >
          Diagram
        </button>
      </div>

      {/* viser tabell eller diagram */}
      {showTable ? (
        <CountryTable data={countries} />
      ) : (
        <CountryChart data={countries} />
      )}
    </section>
  );
}
