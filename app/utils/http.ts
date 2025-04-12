export const HOST_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_HOST_URL || 'http://localhost:3000'
    : process.env.PROD_HOST_URL
