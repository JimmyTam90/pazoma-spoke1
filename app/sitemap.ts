import type { MetadataRoute } from 'next';
import { pageUrl } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: pageUrl(''), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: pageUrl('/affiliate-disclosure'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: pageUrl('/privacy'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: pageUrl('/terms'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: pageUrl('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
