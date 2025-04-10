import { LoaderFunctionArgs, redirect, ActionFunctionArgs } from "react-router";
import { Form, Link, MetaFunction, useActionData, useSearchParams } from "react-router";
import React,{ useRef, useEffect } from "react";
import { safeRedirect } from "remix-utils/safe-redirect";
import { verifyLogin } from "../models/user.server";
import { getUserId, createUserSession } from "../session.server";
import { validateEmail } from "../utils";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log("🔍 Login Loader - Starting check for existing session");
  const userId = await getUserId(request);
  
  if (userId) {
    console.log("👤 User already logged in, redirecting to home", { userId });
    return redirect("/");
  }
  
  console.log("📝 No existing session found, showing login form");
  return ({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log("🔐 Login Action - Processing login attempt");
  
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"));
  const remember = formData.get("remember");

  console.log("📨 Received form data:", { 
    email, 
    passwordLength: password?.toString().length,
    redirectTo,
    remember 
  });

  // Validate email
  if (!validateEmail(email)) {
    console.log("❌ Email validation failed", { email });
    return {
      errors: { email: "Email is invalid", password: null },
      status: 400
    };
  }

  // Validate password presence
  if (typeof password !== "string" || password.length === 0) {
    console.log("❌ Password validation failed - empty password");
    return {
      errors: { email: null, password: "Password is required" },
      status: 400
    };
  }

  // Validate password length
  if (password.length < 3) {
    console.log("❌ Password validation failed - too short", { length: password.length });
    return {
      errors: { email: null, password: "Password is too short" },
      status: 400
    };
  }

  console.log("🔍 Attempting to verify login credentials");
  const user = await verifyLogin(email, password);

  if (!user) {
    console.log("❌ Login verification failed - invalid credentials");
    return {
      errors: { email: "Invalid email or password", password: null },
      status: 400
    };
  }

  console.log("✅ Login successful, creating user session", { userId: user.id });
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
  const redirectTo = searchParams.get("redirectTo") ?? "/";
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("🔄 Form state updated", { 
      hasEmailError: !!actionData?.errors?.email,
      hasPasswordError: !!actionData?.errors?.password 
    });

    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
    emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [actionData]);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-stretch">
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="max-w-md w-full space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="./logoscopello.png" 
              alt="Le Vie di Scopello" 
              style={{ width: '250px', height: '250px' }}
              onLoad={() => console.log("🖼️ Logo image loaded")}
            />
            <h1 className="text-3xl text-center font-semibold text-blue">
              Le Vie di Scopello
            </h1>
          </div>
          
          <p className="text-center text-blue">
            Crea un account per prenotare i biglietti dei nostri eventi, pagare online e saltare la fila!
          </p>
          
          <Link 
            to="/join" 
            className="block text-center bg-celeste text-blue py-2 px-4 rounded hover:bg-green-600"
            onClick={() => console.log("🔗 Register link clicked")}
          >
            Registrati
          </Link>
          
          <p className="text-center text-blue">
            Se hai gia' un account, accedi subito.
          </p>
          
          <Form 
            method="post" 
            className="space-y-4"
            onChange={(e) => console.log("📝 Form input changed", { 
              field: (e.target as HTMLInputElement).name 
            })}
          >
            <div>
              <label htmlFor="email" className="sr-only">Indirizzo e-mail</label>
              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-blue rounded-t-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                placeholder="Indirizzo e-mail"
              />
              {actionData?.errors?.email && (
                <div className="text-red-500 text-sm mt-1">
                  {actionData.errors.email}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                ref={passwordRef}
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-blue rounded-b-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {actionData?.errors?.password && (
                <div className="text-red-500 text-sm mt-1">
                  {actionData.errors.password}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <input 
                id="remember_me" 
                name="remember" 
                type="checkbox" 
                className="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded"
                onChange={(e) => console.log("🔄 Remember me toggled", { 
                  checked: e.target.checked 
                })}
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-blue">
                Ricordami
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={() => console.log("🔘 Submit button clicked")}
              >
                <input type="hidden" name="redirectTo" value={redirectTo} />
                Log in
              </button>
            </div>
          </Form>
        </div>
      </div>
      
      <div className="w-full h-64 lg:h-full lg:flex-1 order-first lg:order-none">
        <img
          src="./loginEvent.jpeg"
          alt="Event background"
          className="w-full h-full object-cover"
          onLoad={() => console.log("🖼️ Background image loaded")}
        />
      </div>
    </section>
  );
}
