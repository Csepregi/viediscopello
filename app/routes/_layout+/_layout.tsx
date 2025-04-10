import type { LoaderFunctionArgs } from 'react-router';
import type { User } from '@prisma/client'
import { redirect } from 'react-router';
import { Outlet } from 'react-router';
import { authenticator } from '../../services/auth/config.server'
import React from 'react';
import Header from '../../components/header';
import { Navigation } from '../../components/navigation';

type LoaderData = {
  user: User | null
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await authenticator.isAuthenticated(request)

  // Force redirect to /account on authenticated user.
  const url = new URL(request.url)
  if (session && url.pathname === '/') return redirect('/account')

  return ({ user: session })
}

export default function Layout() {
  // Check bellow info about why we are force casting <LoaderData>
  // https://github.com/remix-run/remix/issues/3931
  // const { user } = useLoaderData() as LoaderData

  return (
     <div className="min-h-screen w-full h-screen ">
      {/* Background. */}
      <div />
      {/* Navigation. */}
      <Header/>
      {/* Outlet. */}
      <Outlet />

      {/* Footer. */}
    </div>
  )
}
