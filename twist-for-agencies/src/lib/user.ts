import { currentUser } from "@clerk/nextjs/server";

export const user = currentUser()