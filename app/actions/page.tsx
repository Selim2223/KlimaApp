import { actions } from "@data/actions";
import ActionCard from "@components/ActionCard";

export default function ActionsPage() {
  return (
    <section className="p-6">
      {/* hovedtitel */}
      <h1 className="text-center text-2xl font-bold mb-6">
        Grunlegende og viktige klimatiltak
      </h1>

      {/* viser ale kort med tiltak */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((one) => (
          <ActionCard key={one.slug} item={one} />
        ))}
      </div>
    </section>
  );
}
