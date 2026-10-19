import { FREE_SHIPPING_TEXT, SITE } from '@/lib/config';
import CopyCouponButton from './CopyCouponButton';

export default function AnnouncementBar() {
  const { code, discount } = SITE.coupon;
  return (
    <div>
      {code ? (
        <div className="bg-accent text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm font-medium">
            <span>
              🎉 Exclusive Deal: Use code <strong className="uppercase">{code}</strong> for {discount} OFF at checkout!
            </span>
            <CopyCouponButton />
          </div>
        </div>
      ) : null}
      <div className="border-b border-white/10 bg-black text-white">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-sm font-extrabold uppercase tracking-wide">
          <span aria-hidden="true">🚚 </span>
          {FREE_SHIPPING_TEXT}
          <span className="ml-2 text-xs font-medium normal-case tracking-normal text-gray-400">at Pazoma Racing</span>
        </p>
      </div>
    </div>
  );
}
