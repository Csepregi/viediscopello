import type { Password, User } from "@prisma/client";
import bcrypt from "bcryptjs";
import Stripe from "stripe";
import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: User["email"], password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });
  await ensureStripeCustomer(user)
  return user
}

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(
  email: User["email"],
  password: Password["hash"],
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash,
  );

  if (!isValid) {
    return null;
  }

  ensureStripeCustomer(userWithPassword)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}

const ensureStripeCustomer = async (user: User) => {
    // Check to see if there is a stripe customer Id on the user
    if(user.stripeCustomerId) {
      return;
    }
    // otherwise crete a stripe customer
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: {
        userId: user.id
      }
    })
    await prisma.user.update({
      where: {id: user.id},
      data: {
        stripeCustomerId: customer.id
      }
    })
}
