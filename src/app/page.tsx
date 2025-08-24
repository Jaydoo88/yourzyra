// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-zyra-bg text-zyra-text flex flex-col items-center justify-center gap-6 font-sans">
      <h1 className="text-5xl font-bold">Tailwind is Working!</h1>
      <p className="text-lg text-zyra-muted">
        If you see a dark background and large styled text, Tailwind is now active.
      </p>
      <div className="flex gap-4">
        <Link href="/users" className="text-zyra-brand hover:underline">View Users</Link>
        <a href="/api/health" target="_blank" rel="noreferrer" className="hover:underline">Health</a>
        <a href="/test" target="_blank" rel="noreferrer" className="hover:underline">DB Test</a>
      </div>
    </main>
  )
}