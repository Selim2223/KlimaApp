import { notFound } from "next/navigation";
import { actions } from "@data/actions";
import Image from "next/image";
import Link from "next/link";

type Props = { params: { slug: string } };

export default function ActionDetail({ params }: Props) {
  const item = actions.find((a) => a.slug === params.slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-2xl space-y-4">
      {/* bilde */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={450}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* tekst */}
      <p className="text-center text-base text-gray300">{item.text}</p>

      {/* knaper */}
      <div className="flex justify-center gap-3">
        <Link
          href="/actions"
          className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
        >
          ← Tilbake
        </Link>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
        >
          Les mer
        </a>
      </div>
    </article>
  );
}
