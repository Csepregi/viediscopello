import { createBillingSession } from "~/models/subscription.server"
import {requireUser} from '../models/session.server'
import { redirect } from "react-router"
import type { Route } from "./+types/billing"

export const action = async ({request}: Route.ActionArgs) => {
    const user = await requireUser(request);
    //create a customer portal session
    const url = await createBillingSession(user)
    if (!url) throw new Error('Failed to create billing session.')
    // redirect to the customer portal
    return redirect(url)
}
