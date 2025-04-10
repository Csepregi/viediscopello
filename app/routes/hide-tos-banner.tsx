import {  redirect, type ActionFunctionArgs } from "react-router";
import { tosBannerCookie } from "../cookie.server";

export async function loader() {
  return ({ status: 405 });
}

export async function action({ request }: ActionFunctionArgs) {
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