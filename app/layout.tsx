import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InstaScore AI',
  description: 'Instagram professional profile scoring and creator ranking platform'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="logo">Insta<span>Score</span> AI</div>
          <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/rankings">Rankings</a>
            <a href="/profiles/travelwithnavi">Demo Profile</a>
          </div>
        </nav>
        {children}
        <footer className="footer container">Built as a compliant MVP for connected and public professional Instagram profile analytics. Replace mock data with official Meta API integration before launch.</footer>
      </body>
    </html>
  );
}
