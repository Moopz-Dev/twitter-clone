import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prisma from "./prismadb";
import { getToken } from "next-auth/jwt";
export default async function serverAuth(req: NextApiRequest) {
  const session = await getSession({ req });
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_JWT_SECRET,
  });

  console.log(token);

  const email = session?.user?.email || token?.email;

  console.log(email);
  if (!email) {
    throw new Error("Not Signed In");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!currentUser) {
    throw new Error("Not Signed In");
  }

  return { currentUser };
}
