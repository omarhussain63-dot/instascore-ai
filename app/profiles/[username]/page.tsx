import { profiles } from '@/data/mockProfiles';
import { MetricCard } from '@/components/MetricCard';
import { ScoreCard } from '@/components/ScoreCard';
import { ScoreBreakdown } from '@/components/ScoreBreakdown';
import { notFound } from 'next/navigation';

export default function ProfilePage({ params }: { params: { username: string } }) {
  const profile = profiles.find(p => p.username === params.username);
  if (!profile) return notFound();
  return <main className="container"><div className="profileHeader"><div className="avatar">{profile.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><h1 style={{marginBottom:4}}>@{profile.username}</h1><p className="muted">{profile.name} • {profile.category} • {profile.country} • {profile.tier} tier</p></div></div><div className="grid grid4" style={{marginTop:24}}><MetricCard label="Followers" value={profile.followers.toLocaleString()}/><MetricCard label="Avg likes" value={profile.avgLikes.toLocaleString()}/><MetricCard label="Avg comments" value={profile.avgComments}/><MetricCard label="Posts / 30d" value={profile.postsLast30d}/></div><div className="grid" style={{gridTemplateColumns:'340px 1fr', marginTop:18}}><ScoreCard score={profile.score.totalScore}/><ScoreBreakdown score={profile.score}/></div><div className="card" style={{marginTop:18}}><h2>Commercial summary</h2><p className="muted">This profile is best evaluated against other {profile.category.toLowerCase()} creators in {profile.country} within the {profile.tier.toLowerCase()} follower tier. Scores are estimates from available metrics and become more accurate when the creator connects their own professional account.</p></div></main>;
}
