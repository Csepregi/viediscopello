import { autoRoutes } from 'react-router-auto-routes'
import { type RouteConfig } from '@react-router/dev/routes'

export default autoRoutes({
  routesDir: "routes",
  ...{
    ignoredRouteFiles: ["**/.*"],
},
}) satisfies RouteConfig
