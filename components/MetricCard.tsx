export function MetricCard({ label, value, note }: { label: string; value: string | number; note?: string }) {
  return <div className="card"><div className="stat">{label}</div><div className="value">{value}</div>{note && <div className="muted">{note}</div>}</div>;
}
