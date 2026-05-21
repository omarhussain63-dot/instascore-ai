import { MetricCard } from '@/components/MetricCard';
import { ScoreCard } from '@/components/ScoreCard';
import { ScoreBreakdown } from '@/components/ScoreBreakdown';
import { GrowthChart } from '@/components/GrowthChart';
import { profiles, topPosts } from '@/data/mockProfiles';

export default function DashboardPage() {
  const profile = profiles[0];
  return <main className="container"><div className="profileHeader"><div className="avatar">NJ</div><div><h1 style={{marginBottom: 4}}>Brand Dashboard</h1><p className="muted">Monitoring @{profile.username} • {profile.category} • {profile.country}</p></div></div><div className="grid grid4" style={{marginTop:24}}><MetricCard label="Followers" value={profile.followers.toLocaleString()} note={`${profile.tier} tier`}/><MetricCard label="Engagement" value={`${profile.score.engagementRate}%`} note="Avg likes + comments"/><MetricCard label="Reach rate" value={`${profile.score.reachRate}%`} note="Avg reach / followers"/><MetricCard label="30d growth" value={`+${profile.followerGrowth30d.toLocaleString()}`} note="Mock snapshot"/></div><div className="grid" style={{gridTemplateColumns:'340px 1fr', marginTop:18}}><ScoreCard score={profile.score.totalScore}/><ScoreBreakdown score={profile.score}/></div><div style={{marginTop:18}}><GrowthChart /></div><div className="card" style={{marginTop:18}}><h2>Top content</h2><table className="table"><thead><tr><th>Content</th><th>Type</th><th>Likes</th><th>Comments</th><th>Reach</th></tr></thead><tbody>{topPosts.map(post => <tr key={post.title}><td>{post.title}</td><td><span className="pill">{post.type}</span></td><td>{post.likes.toLocaleString()}</td><td>{post.comments}</td><td>{post.reach.toLocaleString()}</td></tr>)}</tbody></table></div></main>;
}
