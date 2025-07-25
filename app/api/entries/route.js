import { prisma } from '../../../lib/prisma';

export async function POST(req) {
  const data = await req.json();
  const entry = await prisma.entry.create({ data: { category: data.category, content: data.content } });
  return new Response(JSON.stringify(entry), { status: 201, headers: { 'Content-Type': 'application/json' } });
}

export async function GET() {
  const entries = await prisma.entry.findMany({ orderBy: { id: 'desc' } });
  return new Response(JSON.stringify(entries), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
