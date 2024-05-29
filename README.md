
# viediscopello
sicilian non profit organisation website


### Base Features

- Database ORM with [Prisma.](https://www.prisma.io)
- Production Ready with [SQLite](https://sqlite.org/index.html) 
- [Fly app Deployment](https://fly.io) with [Docker.](https://www.docker.com/products/docker-desktop)
- [GitHub Actions](https://github.com/features/actions) for Deploy on merge to Production and Staging environments.
- HealthCheck Endpoint for [Fly Backups.](https://fly.io/docs/reference/configuration/#services-http_checks)
- Styling with [TailwindCSS](https://tailwindcss.com) + [Tailwind Prettier-Plugin.](https://github.com/tailwindlabs/

### Stack Features

- [Stripe Subscriptions](https://stripe.com/docs/billing/subscriptions/overview) with support for [Billing Cycles](https://stripe.com/docs/billing/subscriptions/billing-cycle), [Multi Currency](https://stripe.com/docs/currencies) and [Customer Portal.](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal)
- Authentication Ready with [Remix-Auth](https://www.npmjs.com/package/remix-auth), 
- Flat Routes with [Remix Flat Routes.](https://github.com/kiliman/remix-flat-routes)

Learn more about [Remix Stacks.](https://remix.run/stacks)

> Stripe Stack v3 has been released after the integration of Supa-Stripe-Stack from [rphlmr](https://github.com/rphlmr). Special thanks to him for his great work and a big recommendation to check his [implementation](https://github.com/rphlmr/supa-stripe-stack).

## Live Demo


[![Remix Auth OTP Stack](https://raw.githubusercontent.com/dev-xo/dev-xo/main/stripe-stack/assets/images/Thumbnail-Min.png)](https://stripe-stack-dev.fly.dev)

Here's a simple workflow you can follow to test the template:


### Stripe Envs

In order to use Stripe Subscriptions and seed our database, we'll require to get the secret keys from our Stripe Dashboard.

1. Create a [Stripe Account](https://dashboard.stripe.com/login) or use an existing one.
2. Visit [API Keys](https://dashboard.stripe.com/test/apikeys) section and copy the `Publishable` and `Secret` keys.
3. Paste each one of them into your `.env` file as `STRIPE_PUBLIC_KEY` and `STRIPE_SECRET_KEY` respectively.

### Stripe Webhook Envs

In order to start receiving Stripe Events to our Webhook Endpoint, we'll require to install the [Stripe CLI.](https://stripe.com/docs/stripe-cli) Once installed run the following command in your console:

```sh
stripe listen --forward-to localhost:3000/api/webhook
```

This should give you a Webhook Secret Key. Copy and paste it into your `.env` file as `DEV_STRIPE_WEBHOOK_ENDPOINT`.

> [!IMPORTANT]
> This command should be running in your console while developing.

## Database

Before starting our development, we'll require to setup our Prisma Migrations. First, ensure that your Prisma Schema is configured accordingly to your needs. Check `/prisma/schema.prisma` to learn more about it.

Once you're done, run the following command in your console:

```sh
npx prisma migrate dev --name init --skip-seed
```

### Seeding Database

Now that we have our database initialized, we'll require to seed it with our Stripe Plans. Check `/services/stripe/plans` to learn more about it.

Once you're done, run the following command in your console:

```sh
npx prisma db seed
```










