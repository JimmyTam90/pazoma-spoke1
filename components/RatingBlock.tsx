import { RATING } from '@/lib/config';

/** Renders nothing unless a real rating is configured in lib/config.ts (no invented ratings). */
export default function RatingBlock() {
  if (!RATING) return null;
  const { value, count, source } = RATING;
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const star = 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z';
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1" aria-label={`Rated ${value} out of 5 from ${count} reviews`}>
      <span className="relative inline-flex" aria-hidden="true">
        <span className="flex text-white/20">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={star} /></svg>
          ))}
        </span>
        <span className="absolute inset-y-0 left-0 flex overflow-hidden text-amber-400" style={{ width: `${pct}%` }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d={star} /></svg>
          ))}
        </span>
      </span>
      <span className="text-sm font-bold text-white">{value.toFixed(1)}</span>
      <span className="text-sm text-gray-400">({count} reviews · {source})</span>
    </div>
  );
}
