import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

// Shape of the JSON we return
type HealthOK = { ok: true }
type HealthFail = { ok: false; error: string }

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<HealthOK | HealthFail>
) {
  try {
    await prisma.$queryRaw`SELECT 1`
    return res.status(200).json({ ok: true })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return res.status(500).json({ ok: false, error: msg })
  }
}