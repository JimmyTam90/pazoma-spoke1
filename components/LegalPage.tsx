import type { ReactNode } from 'react';

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 text-gray-300">
      <h1 className="mb-6 text-3xl font-extrabold text-white">{title}</h1>
      <div className="space-y-4 leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_a]:underline">{children}</div>
    </main>
  );
}
