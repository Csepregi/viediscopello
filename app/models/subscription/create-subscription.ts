// Subscription model is not part of the current Prisma schema.
// This file is kept as a stub for routes that are currently disabled.

type Subscription = { id: string; userId: string; createdAt?: Date; updatedAt?: Date }

export async function createSubscription(
  _subscription: Omit<Subscription, 'createdAt' | 'updatedAt'>,
) {
  return null
}
