import Link from "next/link";
import Image from "next/image";
import type { ActionItem } from "@data/actions";

export default function ActionCard({ item }: { item: ActionItem }) {
  return (
    // lenke til detaljside
    <Link
      href={`/actions/${item.slug}`}
      className="rounded-xl border border-neutral-800 overflow-hidden transition-transform hover:-translate-y-1"
    >
      {/* bilde */}
      <div className="relative w-full aspect-[5/3] sm:aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(min-width:1024px) 25vw, (min-width:640px) 45vw, 90vw"
        />
      </div>

      {/* tittel */}
      <div className="p-3 sm:p-4 space-y-2">
        <h3 className="font-semibold text-lg text-center">{item.title}</h3>
      </div>
    </Link>
  );
}
