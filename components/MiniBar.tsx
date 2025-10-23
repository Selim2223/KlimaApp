





type Props = { label: string; user: number; avg: number };

export default function MiniBar({ label, user, avg }: Props) {
  const max = Math.max(user, avg, 1);
  const u = Math.round((user / max) * 100);
  const a = Math.round((avg / max) * 100);

  return (
    <div className="border-2 rounded-lg p-3">
      <div className="flex justify-between text-sm mb-2">
        <span>{label}</span>
        <span className="tabular-nums">
          {Math.round(user)} / {Math.round(avg)} kg
        </span>
      </div>

      <div className="space-y-2">
        <div className="h-2 bg-gray-200 rounded">
          <div className="h-2 bg-red-600 rounded" style={{ width: `${u}%` }} />
        </div>
        <div className="h-2 bg-gray-100 rounded">
          <div className="h-2 bg-gray-500 rounded" style={{ width: `${a}%` }} />
        </div>
      </div>

      <div className="text-[13px] mt-1">
        <span className="text-red-500 font-medium">Rød = din resultat</span>,{' '}
        <span className="text-gray-100">grå = gjennomsnittet</span>
      </div>
    </div>
  );
}
