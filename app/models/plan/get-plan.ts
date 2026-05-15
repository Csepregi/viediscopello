// Plan model is not part of the current Prisma schema.
// This file is kept as a stub for routes that are currently disabled.

type Plan = { id: string; name: string }
type PlanInclude = { prices?: boolean }

export async function getPlanById(_id: Plan['id'], _include?: PlanInclude) {
  return null
}

export async function getAllPlans(_include?: PlanInclude) {
  return [] as Plan[]
}
