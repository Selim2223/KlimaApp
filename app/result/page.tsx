"use client";

import { useCalcStore } from "@store/useCalcStore";
import { AVERAGE, calcTotals } from "@data/factors";
import MiniBar from "@components/MiniBar";

export default function ResultPage() {
  // bruker Zustand hook
  const { answers } = useCalcStore();
  const t = calcTotals(answers);

  // enkel sum av gjennomsnitt
  const avgTotal =
    AVERAGE.flightKg +
    AVERAGE.meatKg +
    AVERAGE.fishKg +
    AVERAGE.dieselKg +
    AVERAGE.heatingKg;

  return (
    <section className="space-y-6 max-w-3xl mx-auto">
      {/* kort med tall */}
      <div className="rounded-xl border-2 p-4">
        <div className="grid gap-4 items-end sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <div className="text-sm text-gray-100">Dine CO₂</div>
            <div className="text-3xl font-bold">
              {Math.round(t.total)} kg CO₂
            </div>
          </div>

          <div className="text-center sm:text-right">
            <div className="text-sm text-gray-100">Gjennomsnitt</div>
            <div className="text-3xl font-bold">
              {Math.round(avgTotal)} kg CO₂
            </div>
          </div>
        </div>
      </div>

      {/* små barer med data */}
      <div className="space-y-2">
        <MiniBar label="Flyreiser" user={t.flightKg} avg={AVERAGE.flightKg} />
        <MiniBar label="Kjøtt" user={t.meatKg} avg={AVERAGE.meatKg} />
        <MiniBar label="Fisk" user={t.fishKg} avg={AVERAGE.fishKg} />
        <MiniBar label="Disel" user={t.dieselKg} avg={AVERAGE.dieselKg} />
        <MiniBar
          label="Oppvarming"
          user={t.heatingKg}
          avg={AVERAGE.heatingKg}
        />
      </div>
    </section>
  );
}
