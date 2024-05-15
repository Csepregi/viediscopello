import { LoaderFunctionArgs, redirect, json, ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, MetaFunction, useActionData, useSearchParams } from "@remix-run/react";
import { useRef, useEffect } from "react";
import { safeRedirect } from "remix-utils/safe-redirect";
import { verifyLogin } from "~/models/user.server";
import { getUserId, createUserSession } from "~/session.server";
import { validateEmail } from "~/utils";

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

  // Manage focus on input fields when there are errors
  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-stretch">
      {/* Introductory text container */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="max-w-md w-full space-y-4">
          <div className="text-lg text-blue text-center font-medium px-4 py-2">
            Per accedere alla nostra piattaforma di prenotazione dei biglietti, ti invitiamo a fornire il tuo indirizzo email e creare una password. Una volta completata la registrazione e aver proceduto con il pagamento riceverai il tuo biglietto direttamente nella tua casella di posta elettronica.
          </div>
          <Form method="post" className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-blue">Log In</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Indirizzo e-mail</label>
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-blue text-gray-900 rounded-t-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
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
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember" type="checkbox" className="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded"/>
                <label htmlFor="remember_me" className="ml-2 block text-sm text-blue"> Ricordami </label>
              </div>
              <div className="text-sm">
                <Link to={{ pathname: "/join", search: searchParams.toString() }} className="font-medium text-blue hover:text-blue">
                 Non hai ancora un account? Registrati
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
              >
                  <input type="hidden" name="redirectTo" value={redirectTo} />
                Log in
              </button>
            </div>
          </Form>
        </div>
      </div>

      {/* Background image container, visible on all device sizes */}
      <div className="w-full h-64 lg:h-full lg:flex-1 order-first lg:order-none">
        <img
          src="./loginEvent.jpeg"
          alt="Event background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
