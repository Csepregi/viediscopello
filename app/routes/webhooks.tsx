import Stripe from 'stripe'
import { handleWebhook } from '~/models/subscription.server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const action = async ({request}) => {
  try {
    return await handleWebhook(request)
  } catch (error) {
    return error
  }
  // const secret = 'whsec_c81d7aa08c421c066c1cafeb9c5542f6535b90afd1a6f1f5c9b12e4edb49868e'
  // const sig = request.headers.get('stripe-signature')
  // let event;
  // const payload = await request.text()

  // try {
  //   event = stripe.webhooks.constructEvent(payload, sig, secret)
  // } catch(err) {
  //   return new Response(err.message, {
  //     status: 400,
  //   })
  // }

  // if(event.type == 'payment_intent.succeeded') {
  //   const paymentIntent = event.data.object;
  //   console.log("💰 payment success!")
  // }

  // return {};
}