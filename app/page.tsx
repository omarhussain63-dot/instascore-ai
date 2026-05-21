import { MetricCard } from '@/components/MetricCard';
import { ProfileTable } from '@/components/ProfileTable';

export default function HomePage() {
  return <main><section className="hero container"><div><div className="badge">Creator intelligence platform</div><h1>Score and rank Instagram professional profiles.</h1><p>InstaScore AI helps brands discover creators, compare audience quality, and rank public professional profiles using transparent scoring logic.</p><div className="actions"><a className="btn primary" href="/dashboard">Open dashboard</a><a className="btn secondary" href="/rankings">View rankings</a></div></div><div className="card"><div className="profileHeader"><div className="avatar">IS</div><div><h2 style={{margin:0}}>Live MVP Demo</h2><p className="muted">Mock data today. Official Meta API connector ready for production approval.</p></div></div><div className="grid grid3" style={{marginTop:22}}><MetricCard label="Profiles" value="6"/><MetricCard label="Top score" value="74"/><MetricCard label="Countries" value="1"/></div></div></section><section className="container"><ProfileTable /></section></main>;
}
