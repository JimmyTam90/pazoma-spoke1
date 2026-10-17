import AffiliateCTA from './AffiliateCTA';

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur md:hidden">
      <AffiliateCTA slug="all-products" placement="mobile-sticky" className="w-full">
        Shop Pazoma Racing Parts
      </AffiliateCTA>
    </div>
  );
}
