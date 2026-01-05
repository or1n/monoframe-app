"use client";

import Image from "next/image";

const ITEMS = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  img: `https://picsum.photos/seed/mono${i + 1}/1200/800`,
  year: 2024 - i,
}));

export default function Portfolio() {
  return (
    <main className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((it) => (
          <article key={it.id} className="rounded overflow-hidden shadow-sm bg-[var(--background)]">
            <div className="aspect-[3/2] w-full relative">
              <Image src={it.img} alt={it.title} className="object-cover" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="p-4">
              <h3 className="font-bold">{it.title}</h3>
              <p className="text-sm opacity-60">{it.year}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
