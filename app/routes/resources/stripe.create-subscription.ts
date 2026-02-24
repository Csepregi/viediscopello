import { redirect } from 'react-router'
import { getUserId } from '~/session.server'
import type { Route } from './+types/stripe.create-subscription'

// Legacy endpoint placeholder: the original Stripe subscription flow depends on
// commented-out auth/Stripe modules in this codebase.
export async function loader({ request }: Route.LoaderArgs) {
  const userId = await getUserId(request)
  return redirect(userId ? '/account' : '/login')
}
