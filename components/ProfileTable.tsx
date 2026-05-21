import { profiles } from '@/data/mockProfiles';

export function ProfileTable() {
  const ranked = [...profiles].sort((a, b) => b.score.totalScore - a.score.totalScore);
  return <div className="card"><h2>Creator rankings</h2><table className="table"><thead><tr><th>Rank</th><th>Profile</th><th>Category</th><th>Tier</th><th>Followers</th><th>Score</th></tr></thead><tbody>{ranked.map((p, index) => <tr key={p.username}><td>#{index + 1}</td><td><a style={{ color: 'white', fontWeight: 900 }} href={`/profiles/${p.username}`}>@{p.username}</a><br/><span className="muted">{p.name}</span></td><td><span className="pill">{p.category}</span></td><td>{p.tier}</td><td>{p.followers.toLocaleString()}</td><td><strong>{p.score.totalScore}</strong>/100</td></tr>)}</tbody></table></div>;
}
