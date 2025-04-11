// import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
// import { redirect } from "react-router";
// import { logout } from "../session.server";
// import { authenticator } from "../services/auth/config.server";
// import { getSession, destroySession } from "../services/auth/session.server";

// // Handle POST requests
// export async function action({ request }: ActionFunctionArgs) {
//   // Verify this is a POST request
//   if (request.method !== "POST") {
//     throw new Response("Method not allowed", { status: 405 });
//   }

//   // Get both sessions
//   const authSession = await getSession(request.headers.get('Cookie'));
  
//   try {
//     // Logout from authenticator
//     await authenticator.logout(request, { redirectTo: '/' });
    
//     // Logout from session.server
//     const logoutResponse = await logout(request);
    
//     // Combine the cookie headers to clear both sessions
//     return new Response(null, {
//       headers: {
//         'Set-Cookie': [
//           await destroySession(authSession),
//           logoutResponse.headers.get('Set-Cookie') || '',
//         ].join(', '),
//         Location: '/',
//       },
//       status: 302,
//     });
//   } catch (error) {
//     console.error("Logout error:", error);
//     return redirect('/');
//   }
// }

// // Handle GET requests - redirect to home
// export async function loader({ request }: LoaderFunctionArgs) {
//   if (request.method === "GET") {
//     return redirect("/");
//   }
//   throw new Response("Method not allowed", { status: 405 });
// }
