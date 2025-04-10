import { createBillingSession } from "../models/subscription.server"
import {requireUser} from '../models/session.server'
import { redirect } from "react-router";
import { Route } from "../+types/root";

export const action = async ({request}: Route.LoaderArgs) => {
    const user = await requireUser(request);
    //create a customer portal session
    const url = await createBillingSession(user)
    // redirect to the customer portal
    return redirect(url)
}
