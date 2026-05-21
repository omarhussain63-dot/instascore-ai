'use client';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { growthSeries } from '@/data/mockProfiles';
export function GrowthChart() {
  return <div className="card"><h2>30-day growth snapshot</h2><div style={{ width:'100%', height:260 }}><ResponsiveContainer><LineChart data={growthSeries}><CartesianGrid strokeDasharray="3 3" opacity={0.2}/><XAxis dataKey="day"/><YAxis/><Tooltip/><Line type="monotone" dataKey="followers" strokeWidth={3}/><Line type="monotone" dataKey="reach" strokeWidth={3}/></LineChart></ResponsiveContainer></div></div>;
}
