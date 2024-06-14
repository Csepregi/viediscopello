import Stripe from 'stripe'
import { handleWebhook } from '~/models/subscription.server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const action = async ({request}) => {
  try {
    return await handleWebhook(request)
  } catch (error) {
    return error
  }
}