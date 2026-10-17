import { SITE } from '@/lib/config';
import CopyCouponButton from './CopyCouponButton';

export default function AnnouncementBar() {
  const { code, discount } = SITE.coupon;
  if (!code) return null;
  return (
    <div className="bg-accent text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm font-medium">
        <span>
          🎉 Exclusive Deal: Use code <strong className="uppercase">{code}</strong> for {discount} OFF at checkout!
        </span>
        <CopyCouponButton />
      </div>
    </div>
  );
}
