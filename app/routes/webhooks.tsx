import { handleWebhook } from '~/models/subscription.server'
import type { Route } from './+types/webhooks'

export const action = async ({request}: Route.ActionArgs) => {
  try {
    return await handleWebhook(request)
  } catch (error) {
    return error
  }
}
