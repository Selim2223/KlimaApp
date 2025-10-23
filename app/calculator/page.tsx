'use client';

import Link from 'next/link';
import { useCalcStore } from '@store/useCalcStore';
import { calcTotals } from '@data/factors';

export default function CalculatorPage() {
  const { answers, setAnswer, reset } = useCalcStore();
  const t = calcTotals(answers);

  return (
    <section className="space-y-5 max-w-3xl mx-auto ">
      <h1 className="text-center text-2xl font-bold">Klimakalkulator</h1>

      <div className="rounded-xl border-1 p-4">
        <div className="text-sm text-gray-400">
          Ditt nåværende årlige CO2-utslipp
        </div>
        <div className="text-3xl font-bold">{Math.round(t.total)} kg CO2</div>
      </div>

      <form className="space-y-4 text-gray-400">
        <Field
          label="Flytimer per år"
          value={answers.flightHours}
          onChange={(v) => setAnswer('flightHours', v)}
        />
        <Field
          label="Kjøttmåltider per uke"
          value={answers.meatPerWeek}
          onChange={(v) => setAnswer('meatPerWeek', v)}
        />
        <Field
          label="Fiskemåltider per uke"
          value={answers.fishPerWeek}
          onChange={(v) => setAnswer('fishPerWeek', v)}
        />
        <Field
          label="Dieselkilometer per år"
          value={answers.dieselKmPerYear}
          onChange={(v) => setAnswer('dieselKmPerYear', v)}
        />
        <Field
          label="Hjemmeoppvarming per år (kg)"
          value={answers.heatingKgPerYear}
          onChange={(v) => setAnswer('heatingKgPerYear', v)}
        />
      </form>

      <div className="flex gap-6">
        <button
          type="button"
          className="btn btn-reset border bg-amber-900"
          onClick={reset}
        >
           🔄 Tilbakestill
        </button>
        <Link className="btn btn-result bg-green-700" href="/result">
          Se resultat
        </Link>
      </div>
    </section>
  );
}
 
function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-1 font-medium">{label}</div>
      <input
        type="number"
        min={0}
        step="1"
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        className="w-full rounded border px-3 py-2"
      />
    </label>
  );
}
