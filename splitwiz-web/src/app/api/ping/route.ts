import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Force Node.js runtime so Prisma can run (Edge runtime can't use native drivers)
export const runtime = 'nodejs';

export async function GET() {
  // Simple DB round-trip: count receipts in the table
  const count = await prisma.receipt.count();
  return NextResponse.json({ ok: true, receipts: count });
}
