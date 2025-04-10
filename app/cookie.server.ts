import { createCookie } from "react-router";

export const tosBannerCookie = createCookie("tos-banner", {
  maxAge: 31_536_000, // one year
});