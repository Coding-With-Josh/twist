"use client"

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, LogIn } from "lucide-react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Page = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#090909] to-[#111111] flex flex-col items-center justify-center p-8 lg:p-4 md:p-5">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center space-y-[1.6rem]">
          <LogIn className="h-10 w-10" />
          <h1 className="text-2xl text-center font-semibold tracking-tight">
            Welcome back!
          </h1>
        </div>
        <div className="space-y-4">
          <Button
            variant="outline"
            size="xl"
            className="w-full bg-primary text-foreground hover:bg-primary/90"
          >
            Continue with Google
          </Button>
          <Button variant="outline" size="xl" className="w-full">
            Continue with email
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="relative w-full disabled:opacity-30"
            disabled
          >
            <span className="absolute text-muted-foreground top-1 right-2 px-2 py-1 bg-primary/15 rounded-full text-xs">
              Coming Soon
            </span>
            Continue with Twist
          </Button>
        </div>
        
        <div className="text-center text-sm flex items-center justify-center space-x-2">
          <span>Don't have an account? </span>
          <Link
            href="/sign-up"
            className="font-medium text-primary hover:underline flex items-center justify-center gap-1"
          >
            Sign up <ArrowRight size={14} className="text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
