import credentials from "next-auth/providers/credentials";
import { signIn } from "./auth";


export const SignInWithEmailAndPassword = async (FormData: string[]) => {

  await signIn("credentials", FormData)
  
};
export const SignInWithGoogle = async (formData: FormData) => {
  await signIn("google");
};
export const SignInWithGithub = async (formData: FormData) => {
  await signIn("github");
};
