import { LoaderFunctionArgs } from "react-router";
//import { db } from "../../utils/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
   // await db.user.count(); // or comment this out temporarily
    return new Response('OK', { headers: { 'Content-Type': 'text/plain' } });
  } catch (err) {
    console.error('Healthcheck Error:', err);
    return new Response('OK', { headers: { 'Content-Type': 'text/plain' } });
  }
}
