export function ScoreBreakdown({ score }: { score: Record<string, number> }) {
  const rows = [
    ['Engagement', score.engagementScore],
    ['Growth', score.growthScore],
    ['Reach', score.reachScore],
    ['Consistency', score.consistencyScore],
    ['Audience Quality', score.audienceQualityScore]
  ];
  return <div className="card"><h2>Score breakdown</h2>{rows.map(([name, value]) => <div key={name as string} style={{ marginBottom: 16 }}><div style={{ display:'flex', justifyContent:'space-between', marginBottom: 8 }}><strong>{name}</strong><span>{value}/100</span></div><div className="bar"><div style={{ width: `${value}%` }} /></div></div>)}</div>;
}
