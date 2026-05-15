// Subscription model is not part of the current Prisma schema.
// This file is kept as a stub for routes that are currently disabled.

type Subscription = { id: string; userId: string }

export async function updateSubscriptionById(
  _id: Subscription['id'],
  _subscription: Partial<Subscription>,
) {
  return null
}

export async function updateSubscriptionByUserId(
  _userId: Subscription['userId'],
  _subscription: Partial<Subscription>,
) {
  return null
}
