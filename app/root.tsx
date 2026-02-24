import { data } from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'
import type { Route } from './+types/root'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { getSharedEnvs } from './utils/envs'
import TailwindCSS from './root.css?url'
import Layout from './routes/_app/_layout'
import { tosBannerCookie } from "./cookie.server";
import { LAST_UPDATED_DATE, TOSBanner } from "./components/TOSBanner";
import { getCssText } from "./stitches.config";

export const links: Route.LinksFunction = () => {
  return [{ rel: 'stylesheet', href: TailwindCSS }]
}

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await tosBannerCookie.parse(cookieHeader);
  const ENV = getSharedEnvs();

  if (cookie) {
    return data({ ENV, showTOSBanner: cookie?.dateTOSRead < LAST_UPDATED_DATE });
  }
  return data(
    { ENV,
      showTOSBanner: true,
      
     },
    {
      headers: {
        "Set-Cookie": await tosBannerCookie.serialize({
          dateTOSRead: 0,
        }),
      },
    }
  );
}

export default function App({ loaderData }: Route.ComponentProps) {
   library.add(fas, faTwitter, faFontAwesome)
   const { ENV, showTOSBanner } = loaderData

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
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
          suppressHydrationWarning
        />
      </head>
      <body>
      {showTOSBanner ? <TOSBanner /> : null}
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

      </body>
    </html>
  )
}
