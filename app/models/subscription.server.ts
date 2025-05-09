import type {User } from "@prisma/client";
import { prisma } from "../db.server";
import Stripe from "stripe";
import { updateSubscriptionByUserId } from "./subscription/update-subscription";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' })

export async function createBillingSession(
    user: User
) : Promise<string | null> {
    const session = await stripe.billingPortal.sessions.create({
        customer: user.stripeCustomerId,
        return_url: 'https://viediscopello.it/tastavino',
      });
    return session.url
}

export async function createCheckoutSession(
    user: User,
    price: string,
) : Promise<string | null> {
  console.log('User ', user)
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: price,
            quantity: 1,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10
            }
          },
        ],
        payment_intent_data: {
          description: "Adjust the quantity as needed between 1 and 10."
      },
        customer: user.stripeCustomerId,
        mode: 'payment',
        // discounts: [{
        //   coupon: 'zl7TRed0',
        // }],
       // success_url: 'https://viediscopello.it/success?session_id={CHECKOUT_SESSION_ID}',
        success_url: 'https://viediscopello.it/success?session_id={CHECKOUT_SESSION_ID}',

        cancel_url: 'https://viediscopello.it/payticket',
        allow_promotion_codes: true,
        consent_collection: {
          terms_of_service: 'required',
        },
        custom_text: {
          terms_of_service_acceptance: {
            message: 'Accetto i [Termini e Condizioni](https://viediscopello.it/tastavino/terminiecondizioni)',
          },
        },
          custom_fields: [
            {
              key: 'day',
              label: {
                type: 'custom',
                custom: 'Scegli un giorno',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Venerdi',
                    value: 'Venerdi',
                  },
                  {
                    label: 'Sabato',
                    value: 'Sabato',
                  },
                ],
              },
            },
          ],
          locale: 'it',
      });
      
    return session.url
}

export async function activeSubscription(user: User) {
  if(!user.stripeCustomerId) return false;
  if(!user.stripeSubscriptionId) return false;
  if(user.stripeSubscriptionStatus != 'active' && user.stripeSubscriptionStatus != 'trialing' ) return false;

  return true
}
// export async function activeSubscription(user: User) {
//   if(!user.stripeCustomerId) return false;
//   return true
// }

export async function subscriptionActive(user: User) {
    if(!user.stripeSubscriptionId) return false
    if(user.stripeSubscriptionStatus == 'canceled') return false
    return true
}

export async function handleSubcriptionCreated(
    stripeCustomerId: User["stripeCustomerId"],
    subscription: any
) {
    await prisma.user.update({
        where: { id: subscription.metadata.userId},
        data: {
            stripeSubscriptionId: subscription.id,
            stripeSubscriptionStatus: subscription.status
        }
    })
}

// export async function handleSubcriptionCreated(
//   stripeCustomerId: User["stripeCustomerId"],
//   customer: any
// ) {
//   await prisma.user.update({
//       where: { id: customer.metadata.userId},
//       data: {
//           stripeSubscriptionId: customer.id,
//           stripeSubscriptionStatus: customer.status
//       }
//   })
// }

export async function handleWebhook(request) {
    const secret = process.env.STRIPE_WEBHOOK_SECRET
    const sig = request.headers.get('stripe-signature')
    let event
    const payload = await request.text()

    try {
        event = stripe.webhooks.constructEvent(payload, sig, secret)
    } catch(err: any) {
        return new Response(err.message, {
            status: 400,
        })
    }

    if(event.type === 'checkout.session.completed' || event.type == 'checkout.session.async_payment_succeded') {
        const session = event.data.object
        if(session.payment_status == 'paid') {
            const subscription = await stripe.subscriptions.retrieve(session.subscription)
            await handleSubcriptionCreated(session.customer, subscription)
        }
    }

    if(event.type == 'customer.subscription.updated' || event.type == 'customer.subscription.deleted') {
        const subscription = event.data.object
        await updateSubscriptionStatus(subscription.metadata.userId, subscription.status)
    }

    return {}
}

export async function updateSubscriptionStatus(
    id: User['id'],
    status: String
) {
    await prisma.user.update({
        where: { id },
        data: {
            stripeSubscriptionStatus: status as string
        }
    })
}
