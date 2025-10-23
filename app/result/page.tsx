'use client';

import { useCalcStore } from '@store/useCalcStore';
import { AVERAGE, calcTotals } from '@data/factors';
import MiniBar from '@components/MiniBar';

export default function ResultPage() {
  const { answers } = useCalcStore();
  const t = calcTotals(answers);
  const avgTotal =
    AVERAGE.flightKg +
    AVERAGE.meatKg +
    AVERAGE.fishKg +
    AVERAGE.dieselKg +
    AVERAGE.heatingKg;

  return (
    <section className="space-y-6 max-w-3xl mx-auto ">
      <div className="rounded-xl border-2 p-4 ">
        <div className="grid sm:grid-cols-2 gap-4 items-end ">
          <div>
            <div className="text-sm text-gray-100">Dine CO₂</div>
            <div className="text-3xl font-bold">
              {Math.round(t.total)} kg CO₂
            </div>
          </div>
          <div className='text-right'>
            <div className="text-sm text-gray-100">Gjennomsnitt</div>
            <div className="text-3xl font-bold">
              {Math.round(avgTotal)} kg CO₂
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 ">
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
