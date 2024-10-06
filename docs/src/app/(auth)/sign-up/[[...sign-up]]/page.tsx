import { SignedIn, SignedOut, SignIn, SignUp } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-screen items-center flex justify-center">

      <SignedIn>
        <div className="w-screen h-screen text-black dark:text-white flex items-center justify-center">
          <Link href="/onboarding">Go to dashboard</Link>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="w-screen h-screen text-black dark:text-white flex items-center justify-center">
          <SignUp />
        </div>
      </SignedOut>
    </div>
  );
};

export default Page;
