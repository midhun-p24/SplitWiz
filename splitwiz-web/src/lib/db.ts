import { PrismaClient } from '@prisma/client';

// In dev, Next.js hot-reloads files. This caches a single PrismaClient
// so we don't open a new DB connection on every reload.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'], // shows useful DB logs in the console
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
