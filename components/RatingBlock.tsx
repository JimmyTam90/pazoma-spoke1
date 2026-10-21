import { RATING } from '@/lib/config';

const STAR = 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z';

/** Hero rating badge. Renders nothing unless a real rating is set in lib/config.ts. */
export default function RatingBlock() {
  if (!RATING) return null;
  const { value, count, source, label } = RATING;
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const stars = [0, 1, 2, 3, 4];
  return (
    <div
      className="mt-4 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-2"
      aria-label={`Rated ${value} out of 5 from ${count} reviews`}
    >
      <span className="relative inline-flex" aria-hidden="true">
        <span className="flex text-white/20">
          {stars.map((i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={STAR} /></svg>
          ))}
        </span>
        <span className="absolute inset-y-0 left-0 flex overflow-hidden text-[#F59E0B]" style={{ width: `${pct}%` }}>
          {stars.map((i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d={STAR} /></svg>
          ))}
        </span>
      </span>
      <span className="text-sm font-extrabold text-[#F59E0B]">{value.toFixed(1)}/5</span>
      <span className="text-xs text-gray-300">{label ?? `Rated ${value.toFixed(1)}/5 by ${count}+ reviews · ${source}`}</span>
    </div>
  );
}
