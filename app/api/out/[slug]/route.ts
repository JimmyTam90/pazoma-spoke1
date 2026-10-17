import { NextResponse } from 'next/server';
import { getDestination } from '@/lib/catalog';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const HEADERS = {
  'X-Robots-Tag': 'noindex, nofollow',
  'Cache-Control': 'no-store',
};

export function GET(_req: Request, { params }: { params: { slug: string } }) {
  const destination = getDestination(params.slug);
  if (!destination) {
    return new NextResponse('Not found', { status: 404, headers: HEADERS });
  }
  return new NextResponse(null, { status: 302, headers: { ...HEADERS, Location: destination } });
}
