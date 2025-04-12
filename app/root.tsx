import { type LinksFunction, type LoaderFunctionArgs } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import './root.css'
import { tosBannerCookie } from "./cookie.server";
import { LAST_UPDATED_DATE, TOSBanner } from "./components/TOSBanner";
import { getCssText } from "./stitches.config";
import React from "react";

export const links: LinksFunction = () => {
  return [] // Remove the TailwindCSS import from here
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await tosBannerCookie.parse(cookieHeader);

    if (cookie) {
      return { showTOSBanner: cookie?.dateTOSRead < LAST_UPDATED_DATE };
    }
    return {
      headers: {
        "Set-Cookie": await tosBannerCookie.serialize({
          dateTOSRead: 0,
        }),
      },
    };
  } catch (error) {
    console.error('Root loader error:', error);
    throw error;
  }
}

export default function App() {
   library.add(fas, faTwitter, faFontAwesome)
   const { showTOSBanner } = useLoaderData<typeof loader>()

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
        <Outlet />
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
