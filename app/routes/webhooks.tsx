import Stripe from 'stripe'
import { handleWebhook } from '~/models/subscription.server'
import type { Route } from './+types/webhooks'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const action = async ({request}: Route.ActionArgs) => {
  try {
    return await handleWebhook(request)
  } catch (error) {
    return error
  }
}
