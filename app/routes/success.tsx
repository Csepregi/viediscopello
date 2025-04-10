import React from "react";

export default function Success() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-center">
          <div className="w-44 h-44 text-green-500 mx-auto mb-4">
            {/* Replace this div with your icon */}
            <div className="icon-placeholder">
            <img src="./eventphoto.jpeg" alt="TastaVino Logo" className="mb-2" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-blue mb-2">Grazie per il tuo acquisto!</h2>
          <p className="text-blue mb-4">La tua transazione è stata completata con successo.</p>
          <p className="text-blue mb-4">Mostra la mail ricevuta all’ingresso come prova di acquisto.</p>
          <a href="/tastavino/program" className="inline-block px-6 py-2 mt-4 text-sm font-medium leading-6 text-center text-blue bg-white hover:bg-blue hover:text-white  rounded-full shadow transition duration-200 ease-in-out">
          Torna al Programma
          </a>
        </div>
      </div>
    );
  }

//   import { json, LoaderFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// // Define the loader function to fetch session data
// export const loader: LoaderFunction = async ({ request }) => {
//   const url = new URL(request.url);
//   const sessionId = url.searchParams.get("session_id");

//   if (!sessionId) {
//     throw new Error("Session ID is required");
//   }

//   try {
//     const session = await stripe.checkout.sessions.retrieve(sessionId);
//     return json({ session });
//   } catch (error) {
//     console.error("Error retrieving session:", error);
//     throw new Response("Failed to retrieve session", { status: 500 });
//   }
// };

// type LoaderData = {
//   session: Stripe.Checkout.Session;
// };


// export default function Success() {
//   const { session } = useLoaderData<LoaderData>();

//   return (
//     <div>
//       <h1>Payment Success</h1>
//       <p>Thank you for your purchase!</p>
//       <div>
//         <h2>Session Details</h2>
//         <p>{session.customer_details?.email}</p>
//         <pre>{JSON.stringify(session, null, 2)}</pre>
//       </div>
//     </div>
//   );
// }

