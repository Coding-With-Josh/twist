import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };