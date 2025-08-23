// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>YourZyra</h1>
      <p style={{ marginBottom: 16 }}>
        Minimal starter. Database is live (see <code>/test</code> and <code>/api/health</code>).
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/users">View Users</Link>
        <a href="/api/health" target="_blank" rel="noreferrer">Health</a>
        <a href="/test" target="_blank" rel="noreferrer">DB Test</a>
      </div>
    </main>
  )
}