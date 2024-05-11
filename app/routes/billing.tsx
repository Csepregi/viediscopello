import { createBillingSession } from "~/models/subscription.server"
import {requireUser} from '../models/session.server'
import { redirect } from "@remix-run/node"

export const action = async ({request}) => {
    const user = await requireUser(request);
    //create a customer portal session
    const url = await createBillingSession(user)
    // redirect to the customer portal
    return redirect(url)
}