import { Outlet } from 'react-router'
//import { authenticator } from '~/services/auth/config.server'
import Header from '~/components/header'

// export async function loader({ request }: LoaderFunctionArgs) {
//   const session = await authenticator.isAuthenticated(request)

//   // Force redirect to /account on authenticated user.
//   const url = new URL(request.url)
//   if (session && url.pathname === '/') return redirect('/account')

//   return json<LoaderData>({ user: session })
// }

export default function Layout({ children }: { children?: React.ReactNode }) {
  // Check bellow info about why we are force casting <LoaderData>
  // https://github.com/remix-run/remix/issues/3931
  // const { user } = useLoaderData() as LoaderData

  return (
     <div className="min-h-screen w-full h-screen ">
      {/* Background. */}
      <div />
      {/* Navigation. */}
      <Header/>
      {/* <Navigation user={user} /> */}
      {/* Outlet. */}
      {children ?? <Outlet />}

      {/* Footer. */}
    </div>
  )
}
