import type {
    ActionFunctionArgs,
    LoaderFunctionArgs,
    MetaFunction,
  } from "@remix-run/node";
  import { json, redirect } from "@remix-run/node";
  import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
  import { useEffect, useRef } from "react";
  
  import { verifyLogin } from "../models/user.server";
  import { createUserSession, getUserId } from "~/session.server";
  import { safeRedirect, validateEmail } from "~/utils";
  
  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const userId = await getUserId(request);
    if (userId) return redirect("/");
    return json({});
  };
  
  export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
    const remember = formData.get("remember");
  
    if (!validateEmail(email)) {
      return json(
        { errors: { email: "Email is invalid", password: null } },
        { status: 400 },
      );
    }
  
    if (typeof password !== "string" || password.length === 0) {
      return json(
        { errors: { email: null, password: "Password is required" } },
        { status: 400 },
      );
    }
  
    if (password.length < 8) {
      return json(
        { errors: { email: null, password: "Password is too short" } },
        { status: 400 },
      );
    }
  
    const user = await verifyLogin(email, password);
  
    if (!user) {
      return json(
        { errors: { email: "Invalid email or password", password: null } },
        { status: 400 },
      );
    }
  
    return createUserSession({
      redirectTo,
      remember: remember === "on" ? true : false,
      request,
      userId: user.id,
    });
  };
  
  export const meta: MetaFunction = () => [{ title: "Login" }];
  
  export default function LoginPage() {
    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") || "/loginevent";
    const actionData = useActionData<typeof action>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      if (actionData?.errors?.email) {
        emailRef.current?.focus();
      } else if (actionData?.errors?.password) {
        passwordRef.current?.focus();
      }
    }, [actionData]);
  
    return (
      

//  <body>
//     <section className="min-h-screen flex items-stretch text-blue ">
//         <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-login">
//             <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
//         </div>
//         <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-white">
//             <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-login">
//                 <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
//             </div>
//             <div className="w-full py-6 z-20">
//                 <Form method="post" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
//                     <div className="pb-2 pt-4">
//                         <input ref={emailRef} id="email" required type="email" name="email"  placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black border-2 border-blue" />
//                     </div>
//                     {actionData?.errors?.email ? (
//                       <div className="pt-1 text-red-700" id="email-error">
//                         {actionData.errors.email}
//                       </div>
//                         ) : null}
//                     <div className="pb-2 pt-4">
//                         <input className="block w-full p-4 text-lg rounded-sm bg-black"
//                                id="password"
//                                ref={passwordRef}
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 aria-invalid={actionData?.errors?.password ? true : undefined}
//                                 aria-describedby="password-error" placeholder="Password" />
//                     </div>
//                     <input type="hidden" name="redirectTo" value={redirectTo} />
//                     <div className="px-4 pb-2 pt-4">
//                         <button className="uppercase block w-full p-4 text-lg bg-white text-blue rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Log in</button>
//                     </div>
//                      <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <input
//                           id="remember"
//                           name="remember"
//                         type="checkbox"
//                           className="h-4 w-4 rounded border-gray-300 text-white focus:ring-blue-500"
//                         />
//                         <label
//                           htmlFor="remember"
//                           className="ml-2 block text-sm text-white"
//                         >
//                           Remember me
//                         </label>
//                       </div>
                      
//                       <div className="text-center text-sm text-gray-500">
//                       Don&apos;t have an account?{" "}
//                         <Link
//                           className="text-blue-500 underline"
//                           to={{
//                             pathname: "/join",
//                             search: searchParams.toString(),
//                           }}
//                         >
//                           Sign up
//                         </Link>
//                       </div>
//                     </div> 
//                 </Form>
//             </div>
//         </div>
//     </section>
// </body>


<section className="relative flex flex-wrap lg:h-screen lg:items-center bg-white">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <p className="mt-4 text-blue">
      Per accedere alla nostra piattaforma di prenotazione dei biglietti, ti invitiamo a fornire il tuo indirizzo email e creare una password. Una volta completata la registrazione e aver proceduto con il pagamento riceverai il tuo biglietto direttamente nella tua casella di posta elettronica.
      </p>
    </div>

    <Form method="post" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            name="email" 
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-blue text-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            name="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-blue"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-blue">
          No account?
          <Link to={{
            pathname: "/join",
            search: searchParams.toString(),
          }}><a className="underline" href="#">Sign up</a></Link>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-blue"
        >
           <input type="hidden" name="redirectTo" value={redirectTo} />
          Sign in
        </button>
      </div>
    </Form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="./loginEvent.jpeg"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
                        )
    
  }
  