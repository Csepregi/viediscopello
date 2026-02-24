import { data, redirect } from "react-router";
import { tosBannerCookie } from "~/cookie.server";
import type { Route } from "./+types/hide-tos-banner";

export async function loader() {
  return data("Method not allowed", { status: 405 });
}

export async function action({ request }: Route.ActionArgs) {
  const redirectUrl = (await request.formData()).get("redirectUrl");
  return redirect(typeof redirectUrl === "string" ? redirectUrl : "/", {
    headers: {
      "Set-Cookie": await tosBannerCookie.serialize({
        // set the date that the TOS were read
        dateTOSRead: new Date().valueOf(),
      }),
    },
  });
}
