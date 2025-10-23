



import { notFound } from 'next/navigation';
import { actions } from '@data/actions';
import Image from 'next/image';
import Link from 'next/link';

export default function ActionDetail({ params }: { params: { slug: string } }) {
  const item = actions.find((a) => a.slug === params.slug);
  if (!item) return notFound();

  return (
    <article className="max-w-3xl mx-auto space-y-5">
      {/* 🔹 Заголовок */}
      <h1 className="text-2xl font-bold text-green-400 text-center">
        {item.title}
      </h1>

      {/* 🔹 Изображение */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(min-width:768px) 640px, 100vw"
        />
      </div>

      {/* 🔹 Текст под изображением */}
      <p className="text-lg text-green-400 text-center">{item.text}</p>

      {/* 🔹 Кнопки */}
      <div className="flex gap-4 justify-center pt-4">
        <Link
          href="/actions"
          className="px-5 py-2 rounded-lg bg-red-900 hover:bg-red-500 text-white transition"
        >
          ←Tilbake
        </Link>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-white transition"
        >
          Les mer
        </a>
      </div>
    </article>
  );
}
