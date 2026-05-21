export function ScoreCard({ score, label = 'Profile Score' }: { score: number; label?: string }) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div className="scoreRing" style={{ ['--score' as string]: score }}><strong>{score}</strong></div>
      <div className="stat" style={{ marginTop: 16 }}>{label}</div>
      <p className="muted">Composite score based on engagement, growth, reach, consistency, and audience quality estimate.</p>
    </div>
  );
}
