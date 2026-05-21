import { NextResponse } from 'next/server';
import { profiles } from '@/data/mockProfiles';

export async function GET(_: Request, { params }: { params: { username: string } }) {
  const profile = profiles.find(p => p.username === params.username);
  if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  return NextResponse.json(profile);
}
