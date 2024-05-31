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
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/payticket");
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
  const redirectTo = searchParams.get("redirectTo");
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
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
            <img src="./logoscopello.png" alt="Le Vie di Scopello" style={{ width: '250px', height: '250px' }}/>
            <h1 className="text-3xl text-center font-semibold text-blue">Le Vie di Scopello</h1>
          </div>
          <p className="text-center text-blue">
            Crea un account per prenotare i biglietti dei nostri eventi, pagare online e saltare la fila!
          </p>
          <Link to="/join" className="block text-center bg-celeste text-blue py-2 px-4 rounded hover:bg-green-600">
            Registrati
          </Link>
          <p className="text-center text-blue">Se hai gia’ un account, accedi subito.</p>
          <Form method="post" className="space-y-4">
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
            <div className="flex items-center">
                <input id="remember_me" name="remember" type="checkbox" className="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded" />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-blue">Ricordami</label>
              </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
        />
      </div>
    </section>
  );
}
