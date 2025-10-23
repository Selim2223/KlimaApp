import { actions } from '@data/actions';
import ActionCard from '@components/ActionCard';

export default function ActionsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-center text-3xl font-bold pb-5 pt-5">
        Grunnleggende og viktige klimatiltak
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {actions.map((a) => (
          <ActionCard key={a.slug} item={a} />
        ))}
      </div>
    </section>
  );
}
