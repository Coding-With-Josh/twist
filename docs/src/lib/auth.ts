import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Twitter from "next-auth/providers/twitter"
import db from "./db"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./zod"
import { ZodError } from "zod"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      try {
        let user = null

        const { email, password } = await signInSchema.parseAsync(credentials)

        // logic to salt and hash password
        const pwHash = saltAndHashPassword(password)

        // logic to verify if the user exists
        user = await getUserFromDb(email, pwHash)

        if (!user) {
          throw new Error("User not found.")
        }

        // return JSON object with the user data
        return user
      } catch (error) {
        if (error instanceof ZodError) {
          // Return `null` to indicate that the credentials are invalid
          return null
        }
      }
    },
  }),Google, GitHub, Twitter],
})


function saltAndHashPassword(password: string) {
  throw new Error("Function not implemented.")
}
function getUserFromDb(email: string, pwHash: void): any {
  throw new Error("Function not implemented.")
}

