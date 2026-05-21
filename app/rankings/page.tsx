import { ProfileTable } from '@/components/ProfileTable';
import { MetricCard } from '@/components/MetricCard';
import { profiles } from '@/data/mockProfiles';

export default function RankingsPage() {
  const top = [...profiles].sort((a,b)=>b.score.totalScore-a.score.totalScore)[0];
  return <main className="container"><h1>Creator Rankings</h1><p className="muted">Ranked by category, country, and follower tier using transparent profile score logic.</p><div className="grid grid3" style={{margin:'20px 0'}}><MetricCard label="Top creator" value={`@${top.username}`}/><MetricCard label="Top score" value={`${top.score.totalScore}/100`}/><MetricCard label="Categories" value="6"/></div><ProfileTable /></main>;
}
