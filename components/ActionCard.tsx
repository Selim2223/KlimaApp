




import Link from 'next/link';
import Image from 'next/image';
import type { ActionItem } from '@data/actions';

export default function ActionCard({ item }: { item: ActionItem }) {
  return (
    <Link
      href={`/actions/${item.slug}`}
      className="rounded-xl border border-neutral-800 overflow-hidden transition-transform hover:-translate-y-1"
    >
      <div className="relative w-full aspect-[5/3]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg text-center">{item.title}</h3>
      </div>
    </Link>
  );
}

