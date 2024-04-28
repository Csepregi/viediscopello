import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { getSharedEnvs } from './utils/envs'
import TailwindCSS from './root.css'
import Layout from './routes/_layout+/_layout'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: TailwindCSS }]
}

export function loader() {
  return { ENV: getSharedEnvs() }
}

export default function App() {
   library.add(fas, faTwitter, faFontAwesome)
   const { ENV } = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400"
        />
        <Links />
      </head>
      <body>
        <Layout>
        <Outlet />
        </Layout>
        <ScrollRestoration getKey={location => {
          return location.pathname;
        }}/>
        <Scripts />

        {/* Global Shared Envs. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />

        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
