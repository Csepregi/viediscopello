import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/contradanza": {};
  "/tastavino/galleria": {};
  "/terminiecondizioni": {};
  "/tastavino/program": {};
  "/tastavino": {};
  "/hide-tos-banner": {};
  "/cheFacciamo": {};
  "/loginevent": {};
  "/doveSiamo": {};
  "/payticket": {};
  "/payticket/success": {};
  "/chiSiamo": {};
  "/webhooks": {};
  "/billing": {};
  "/cookies": {};
  "/privacy": {};
  "/success": {};
  "/termini": {};
  "/tickets": {};
  "/logout": {};
  "/join": {};
};