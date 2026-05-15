// Plan model is not part of the current Prisma schema.
// This file is kept as a stub for routes that are currently disabled.

type Plan = { id: string; name: string; createdAt?: Date; updatedAt?: Date }

export async function createPlan(_plan: Omit<Plan, 'createdAt' | 'updatedAt'>) {
  return null
}
