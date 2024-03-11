import type { LoaderFunctionArgs } from '@remix-run/node'
import type { User } from '@prisma/client'
import { redirect, json } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { authenticator } from '~/services/auth/config.server'

type LoaderData = {
  user: User | null
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await authenticator.isAuthenticated(request)

  // Force redirect to /account on authenticated user.
  const url = new URL(request.url)
  if (session && url.pathname === '/') return redirect('/account')

  return json<LoaderData>({ user: session })
}

export default function Layout() {
  // Check bellow info about why we are force casting <LoaderData>
  // https://github.com/remix-run/remix/issues/3931
  // const { user } = useLoaderData() as LoaderData

  return (
     <div className="bg-main bg-cover  min-h-screen w-full h-screen ">
      {/* Background. */}
      <div />
      {/* Navigation. */}
      {/* <Navigation user={user} /> */}
      {/* Outlet. */}
      <Outlet />

      {/* Footer. */}
    </div>
  )
}
