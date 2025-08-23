import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { prisma as sharedPrisma } from '../../lib/prisma'

// Use shared Prisma or fallback
const prisma = sharedPrisma ?? new PrismaClient()

type User = { id: number; email: string; name: string | null; createdAt: string }
type Data =
  | { ok: true; users: User[] }
  | { ok: true; created: User }
  | { ok: false; error: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.method === 'GET') {
      const users = await prisma.user.findMany({ orderBy: { id: 'asc' } })
      const flat = users.map(u => ({ ...u, createdAt: u.createdAt.toISOString() }))
      return res.status(200).json({ ok: true, users: flat })
    }

    if (req.method === 'POST') {
      const { email, name } = req.body ?? {}
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ ok: false, error: 'email is required' })
      }
      const created = await prisma.user.create({ data: { email, name: name ?? null } })
      return res.status(201).json({
        ok: true,
        created: { ...created, createdAt: created.createdAt.toISOString() },
      })
    }

    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    return res.status(500).json({ ok: false, error: msg })
  }
}

export const config = { runtime: 'nodejs' }