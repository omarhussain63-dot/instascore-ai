import { NextResponse } from 'next/server';
import { profiles } from '@/data/mockProfiles';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const country = searchParams.get('country');
  const tier = searchParams.get('tier');
  const filtered = profiles
    .filter(p => !category || p.category.toLowerCase() === category.toLowerCase())
    .filter(p => !country || p.country.toLowerCase() === country.toLowerCase())
    .filter(p => !tier || p.tier.toLowerCase() === tier.toLowerCase())
    .sort((a,b)=>b.score.totalScore-a.score.totalScore)
    .map((p, index) => ({ rank: index + 1, ...p }));
  return NextResponse.json({ results: filtered });
}
