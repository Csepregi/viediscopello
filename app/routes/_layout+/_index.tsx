import type { MetaFunction } from '@remix-run/node'
// import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => [
  { title: 'Stripe Stack - Remix' },
  {
    description: `A Stripe focused Remix Stack that integrates User Subscriptions, Authentication and Testing. Driven by Prisma ORM. Deploys to Fly.io`,
  },
  {
    keywords:
      'remix, stripe, remix-stack, typescript, sqlite, postgresql, prisma, tailwindcss, fly.io',
  },
  { 'og:title': 'Stripe Stack - Remix' },
  { 'og:type': 'website' },
  { 'og:url': 'https://stripe-stack.fly.dev' },
  {
    'og:image':
      'https://raw.githubusercontent.com/dev-xo/dev-xo/main/stripe-stack/assets/images/Stripe-Thumbnail.png',
  },
  { 'og:card': 'summary_large_image' },
  { 'og:creator': '@DanielKanem' },
  { 'og:site': 'https://stripe-stack.fly.dev' },
  {
    'og:description': `A Stripe focused Remix Stack that integrates User Subscriptions, Authentication and Testing. Driven by Prisma ORM. Deploys to Fly.io`,
  },
  {
    'twitter:image':
      'https://raw.githubusercontent.com/dev-xo/dev-xo/main/stripe-stack/assets/images/Stripe-Thumbnail.png',
  },
  { 'twitter:card': 'summary_large_image' },
  { 'twitter:creator': '@DanielKanem' },
  { 'twitter:title': 'Stripe Stack - Remix' },
  {
    'twitter:description': `A Stripe focused Remix Stack that integrates User Subscriptions, Authentication and Testing. Driven by Prisma ORM. Deploys to Fly.io`,
  },
]

export default function Index() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      {/* Main. */}
      <div className="relative flex flex-col items-center">
        {/* Logo. */}
        
       
        {/* Headings. */}
        <div className="flex cursor-default flex-col items-center">
          <h1
            className="bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-8xl 
						font-bold text-transparent transition hover:brightness-125">
             Ci vediamo presto
          </h1>
        </div>
    
      </div>
    </main>
  )
}
