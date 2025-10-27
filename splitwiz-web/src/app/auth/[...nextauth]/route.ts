import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: { params: { scope: "read:user user:email" } },
    }),
  ],
  session: { strategy: "database" },
  pages: { signIn: "/signin" },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/home`;
    },
  },
});

export { handler as GET, handler as POST };
