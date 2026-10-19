import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/Card';
import CouponBox from '@/components/CouponBox';
import AffiliateCTA from '@/components/AffiliateCTA';
import { CATEGORIES, PRODUCTS, formatPrice } from '@/lib/catalog';
import RatingBlock from '@/components/RatingBlock';
import { SITE, VIDEO, pageUrl } from '@/lib/config';

export const metadata: Metadata = {
  alternates: { canonical: pageUrl('') },
  openGraph: { url: pageUrl('') },
};

const FAQ = [
  {
    q: 'Is PrimeGearLab the seller of these parts?',
    a: 'No. PrimeGearLab is an independent affiliate publisher. Orders, shipping, returns and support are handled by Pazoma Racing on pazomaracing.com.',
  },
  {
    q: 'How do I use the PF10 coupon code?',
    a: `Copy the code from this page, open the Pazoma Racing store through any button here, and enter it at checkout. ${SITE.coupon.terms} Final eligibility is determined by the merchant.`,
  },
  {
    q: 'How do I confirm a part fits my Harley?',
    a: 'Each Pazoma listing names the models and years it was made for (for example “M8 Softail 2018–2026”). Match your model family, year and any control or fairing options on the product page before ordering.',
  },
  {
    q: 'What about shipping and returns?',
    a: 'The merchant site shows a free-shipping banner for orders over $49 and some items are marked as shipping within the USA only. Review Pazoma Racing’s shipping and return policies on their site for current details.',
  },
  {
    q: 'Are the prices on this page final?',
    a: `Prices shown are “from” prices observed on the merchant site on ${SITE.priceObservedOn}. They can change and some products have options that change the price, so confirm on the product page.`,
  },
  {
    q: 'Do you earn money when I click?',
    a: 'We may earn a commission when you purchase through eligible links, at no additional cost to you. A click alone does not guarantee a commission.',
  },
];

const exhausts = PRODUCTS.filter((p) => p.categoryId === 'exhausts');
const exhaustRows: Record<string, { fits: string; pipes: string; type: string }> = {
  'p-exhaust-softail': { fits: 'Softail M8, 2018–2026', pipes: '1¾" → 2"', type: '2-into-1 full system' },
  'p-exhaust-touring': { fits: 'Touring M8, 2017–2026', pipes: '1¾" → 1⅞"', type: '2-into-1 full system' },
  'p-exhaust-dyna': { fits: 'Dyna, 2006–2017', pipes: '1¾" → 2"', type: '2-into-1 full system' },
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-ink to-black">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Independent guide · Pazoma Racing</p>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Pazoma Racing Performance Parts for Harley-Davidson Riders
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300">
              Explore Pazoma Racing aftermarket exhausts, LED lighting, handlebars, levers, crash guards and fairings for Softail, Touring and Dyna builds.
              We organize the catalog, point out fitment details and send you straight to the Pazoma Racing store.
            </p>
            <RatingBlock />
            <ul className="mt-5 space-y-2 text-sm text-gray-300">
              <li>✔ Free shipping banner on orders over $49 (per merchant site)</li>
              <li>✔ {SITE.coupon.discount} off storewide with code {SITE.coupon.code}</li>
              <li>✔ Model- and year-specific listings</li>
            </ul>
            <CouponBox className="mt-6 max-w-md" />
            <div className="mt-6 flex flex-wrap gap-3">
              <AffiliateCTA slug="all-products" placement="hero-primary">
                Shop All Pazoma Parts
              </AffiliateCTA>
              <AffiliateCTA slug="engine-guards" placement="hero-secondary" variant="outline">
                Shop Crash Bars & Guards
              </AffiliateCTA>
            </div>
            <p className="mt-4 max-w-xl text-xs text-gray-400">
              This website may contain affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white">
            <Image
              src={SITE.ogImage}
              alt={SITE.ogImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Shop Pazoma Racing Parts by Category</h2>
        <p className="mt-2 max-w-2xl text-gray-400">Jump to the collection that matches your upgrade.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Card
              key={c.id}
              slug={c.slug}
              placement={`category-${c.id}`}
              image={c.image}
              imageAlt={c.name}
              title={c.name}
              specs={[c.blurb, ...c.specs]}
              cta={c.cta}
            />
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-y border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Popular Pazoma Racing Upgrades for Harley Models</h2>
          <p className="mt-2 max-w-2xl text-gray-400">
            Selected from the merchant’s current listings. “From” prices were observed on {SITE.priceObservedOn}; availability is confirmed on the Pazoma Racing product page.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Card
                key={p.id}
                slug={p.slug}
                placement={`product-${p.id}`}
                image={p.image}
                imageAlt={p.merchantTitle}
                title={p.title}
                specs={p.specs}
                priceLine={
                  <>
                    From <strong className="text-white">{formatPrice(p.fromPrice)}</strong>
                  </>
                }
                cta="View on Pazoma Racing"
                priority={i < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">Watch the Video</h2>
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-[#1e293b] bg-slate-950 shadow-lg">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO.id}`}
            title={VIDEO.title}
            loading="lazy"
            className="h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Compare Pazoma Racing 2-into-1 Exhaust Systems</h2>
        <p className="mt-2 max-w-2xl text-gray-400">All three are stainless steel full systems; pick by model family and year.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Pazoma Racing exhaust comparison</caption>
            <thead className="bg-white/5 text-gray-300">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Exhaust</th>
                <th scope="col" className="px-4 py-3 font-semibold">Fits</th>
                <th scope="col" className="px-4 py-3 font-semibold">Head pipes</th>
                <th scope="col" className="px-4 py-3 font-semibold">Type</th>
                <th scope="col" className="px-4 py-3 font-semibold">From</th>
                <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Link</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {exhausts.map((p) => {
                const r = exhaustRows[p.id];
                return (
                  <tr key={p.id}>
                    <th scope="row" className="px-4 py-4 font-semibold text-white">{p.title}</th>
                    <td className="px-4 py-4">{r.fits}</td>
                    <td className="px-4 py-4">{r.pipes}</td>
                    <td className="px-4 py-4">{r.type}</td>
                    <td className="px-4 py-4 font-semibold text-white">{formatPrice(p.fromPrice)}</td>
                    <td className="px-4 py-4">
                      <AffiliateCTA slug={p.slug} placement={`compare-${p.id}`} className="whitespace-nowrap !py-2" ariaLabel={`View ${p.title} on Pazoma Racing`}>
                        View
                      </AffiliateCTA>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* FITMENT */}
      <section id="fitment" className="border-y border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Harley Parts Fitment Guide: Check Before You Buy</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              ['Identify your model family', 'Softail, Touring (Road Glide, Street Glide, Road King), Dyna and others use different parts, so start with the family.'],
              ['Match the model year range', 'Listings state year ranges in the title. Confirm your bike falls inside the range shown on the product page.'],
              ['Check controls and options', 'Handlebars, levers and lighting can depend on hand controls, fairing type or color options. Read the option list before checkout.'],
              ['Apply code PF10 at checkout', 'Add the part to your cart on pazomaracing.com and enter the coupon code, subject to the merchant’s terms.'],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-white">{t}</h3>
                  <p className="mt-1 text-sm text-gray-300">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COUPON CALLOUT */}
      {SITE.coupon.code ? (
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-2xl border border-accent/40 bg-gradient-to-r from-accent/20 to-transparent p-8">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Save {SITE.coupon.discount} on Pazoma Racing Motorcycle Parts</h2>
            <p className="mt-2 max-w-2xl text-gray-300">Copy the code, shop the catalog, and enter it at checkout.</p>
            <CouponBox className="mt-5 max-w-md" />
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 pb-14 pt-4">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Pazoma Racing FAQ</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                {f.q}
                <span aria-hidden="true" className="text-accent transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to Upgrade Your Harley?</h2>
          <p className="mx-auto mt-2 max-w-xl text-gray-300">Browse the full Pazoma Racing catalog and use code {SITE.coupon.code} at checkout.</p>
          <div className="mt-6 flex justify-center">
            <AffiliateCTA slug="all-products" placement="final-cta">
              Shop Pazoma Racing Now
            </AffiliateCTA>
          </div>
        </div>
      </section>
    </main>
  );
}
