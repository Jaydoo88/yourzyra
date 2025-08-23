import { useState } from 'react'

type User = { id: number; email: string; name: string | null; createdAt: string }

export default function UsersPage() {
  const [users, setUsers] = useState<User[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  async function load() {
    setLoading(true)
    const res = await fetch('/api/users')
    const data = await res.json()
    setUsers(data.users ?? [])
    setLoading(false)
  }

  async function addUser(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    })
    if (res.ok) {
      setEmail('')
      setName('')
      await load()
    } else {
      const err = await res.json()
      alert(err.error ?? 'Failed to create user')
    }
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>Users</h1>

      <section style={{ marginBottom: 24 }}>
        <button onClick={load} disabled={loading} style={{ padding: '6px 12px' }}>
          {loading ? 'Loading…' : 'Load users'}
        </button>
      </section>

      <section style={{ marginBottom: 24 }}>
        <form onSubmit={addUser} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
          <input
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="name (optional)"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit" style={{ padding: '6px 12px' }}>Add user</button>
        </form>
      </section>

      <section>
        {users === null ? (
          <p>Click “Load users” to fetch from the database.</p>
        ) : users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul>
            {users.map(u => (
              <li key={u.id}>
                #{u.id} — {u.email} {u.name ? `(${u.name})` : ''} • {new Date(u.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}