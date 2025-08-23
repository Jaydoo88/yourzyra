// deploy bump
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { prisma as sharedPrisma } from '../../lib/prisma'

// Fallback: if the import didn't initialize for any reason, create one here.
const prisma = sharedPrisma ?? new PrismaClient()

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

// Ensure Node runtime (not Edge)
export const config = {
  runtime: 'nodejs',
}