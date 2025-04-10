import {  LoaderFunctionArgs, redirect } from "react-router";
import { Form, Link, MetaFunction, useActionData, useSearchParams } from "react-router";
import { useRef, useEffect } from "react";
import { safeRedirect } from "remix-utils/safe-redirect";
import { getUserByEmail, createUser } from "../models/user.server";
import { getUserId, createUserSession } from "../session.server";
import { validateEmail } from "../utils";
import React from "react";

export const loader = async ({ request }: LoaderFunctionArgs ) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return ({});
};

export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return {    
      errors: { email: "Email is invalid", password: null },
      status: 400,
    };
  }

  if (typeof password !== "string" || password.length === 0) {
    return {
      errors: { email: null, password: "Password is required" },
      status: 400,
    };
  }

  if (password.length < 4) {
    return {
      errors: { email: null, password: "Password is too short" },
      status: 400,
    };
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return {
        errors: {
                 email: "A user already exists with this email",
                 password: null 
                },
        status: 400 
        }
    };
    const user = await createUser(email, password);
  
  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
}

  


export const meta: MetaFunction = () => [{ title: "Sign Up" }];

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
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
    <div className="flex min-h-full flex-col justify-center bg-white text-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        {/* Logo at the top of the form */}
        <div className="flex justify-center mt-2 mb-4">
          <img src="./eventphoto.jpeg" alt="TastaVino Logo" className="mb-2" style={{ height: "200px" }} />
        </div>

        <Form method="post" className="mt-2 space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Indirizzo e-mail
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true} // Auto-focus can still be a point of discussion
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {actionData?.errors?.email && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {actionData.errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {actionData?.errors?.password && (
                <p className="mt-2 text-sm text-red-600" id="password-error">
                  {actionData.errors.password}
                </p>
              )}
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="group relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md  bg-blue-600 hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Crea un account
          </button>

          <div className="flex items-center justify-center text-sm">
            <p>
              Hai già un account?{" "}
              <Link className="hover:text-blue-800" to={{
                pathname: "/loginevent",
                search: searchParams.toString(),
              }}>
                Log in
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
