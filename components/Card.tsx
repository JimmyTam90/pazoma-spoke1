import Image from 'next/image';
import type { ReactNode } from 'react';
import AffiliateCTA from './AffiliateCTA';

type Props = {
  slug: string;
  placement: string;
  image: string;
  imageAlt: string;
  title: string;
  specs: string[];
  priceLine?: ReactNode;
  cta: string;
  priority?: boolean;
};

/** DOM order is fixed on every viewport: IMAGE → TITLE → DESCRIPTION/SPECS → CTA. */
export default function Card({ slug, placement, image, imageAlt, title, specs, priceLine, cta, priority }: Props) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="relative aspect-[4/3] w-full bg-white">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
          className="object-contain"
          priority={priority}
        />
      </div>
      <h3 className="px-5 pt-5 text-lg font-bold leading-snug text-white">{title}</h3>
      <div className="flex-1 px-5 pb-4 pt-3">
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-300">
          {specs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {priceLine ? <p className="mt-3 text-sm text-gray-300">{priceLine}</p> : null}
      </div>
      <div className="px-5 pb-5">
        <AffiliateCTA slug={slug} placement={placement} className="w-full" ariaLabel={`${cta}: ${title}`}>
          {cta}
        </AffiliateCTA>
      </div>
    </article>
  );
}
