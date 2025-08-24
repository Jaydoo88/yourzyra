// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

// Use a global to preserve the PrismaClient instance across hot-reloads in dev
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // enable if you want more visibility while debugging:
    // log: ['query', 'error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma