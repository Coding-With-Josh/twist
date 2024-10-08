"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowLeft, ArrowRight, LogIn } from "lucide-react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import db from "@/lib/db";
import { getDate } from "date-fns";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const Page = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [isEmailSignin, setIsEmailSignin] = useState(false);
  const [password, setPassword] = useState("");
  const [verifying, setVerifying] = useState(false);
  const router = useRouter();

  // Handle submission of the sign-up form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      await db.user.create({
        data: {
          email: emailAddress,
          password: password,
        },
      });
      setVerifying(true);
      console.log("auth success");
      alert("auth success");
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      alert("auth error");
    }
  };

  // Handle the submission of the verification form
  const handleVerify = async (data: { pin: string }) => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: data.pin,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.push("/");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
        alert("verify error midway");
      }
    } catch (err: any) {
      console.error("Error:", JSON.stringify(err, null, 2));
      alert("verify error");
    }
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Display the verification form to capture the OTP code
  if (verifying) {
    return (
      <FormProvider {...form}>
        <div className="min-h-screen bg-gradient-to-t from-[#090909] to-[#111111] flex flex-col items-center justify-center p-8 lg:p-4 md:p-5">
          <form
            className="w-2/3 space-y-6"
            onSubmit={form.handleSubmit(handleVerify)} // Use onSubmit here
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Please enter the one-time password sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>{" "}
            {/* Change to type="submit" */}
          </form>
        </div>
      </FormProvider>
    );
  }

  return (
    <FormProvider {...form}>
      <div className="min-h-screen bg-gradient-to-t from-[#090909] to-[#111111] flex flex-col items-center justify-center p-8 lg:p-4 md:p-5">
        <div className="w-full max-w-sm space-y-6">
          <div className="flex flex-col items-center space-y-[1.6rem]">
            <LogIn className="h-10 w-10" />
            <h1 className="text-2xl text-center font-semibold tracking-tight transition-all">
              {isEmailSignin
                ? "What's your email address"
                : "Create your workspace"}
            </h1>
          </div>
          {isEmailSignin ? (
            <div className="grid gap-4 transition-all animate-in">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                size="xl"
                className="w-full"
                // onClick={handleSubmit}
                onClick={()=>router.push("/[name]")}
              >
                Continue with email
              </Button>
              <span className="mt-[2rem] flex items-center justify-center gap-2 hover:underline">
                <ArrowLeft size={14} />
                <h1 onClick={() => setIsEmailSignin(false)}>Back to sign up</h1>
              </span>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full bg-primary text-foreground hover:bg-primary/90"
                >
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full"
                  onClick={() => setIsEmailSignin(true)}
                >
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
              <div className="text-center text-sm text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link
                  href="#"
                  className="hover:underline hover:underline-offset-3 font-bold"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="hover:underline hover:underline-offset-3 font-bold"
                >
                  Data Processing Agreement
                </Link>
              </div>
              <div className="text-center text-sm flex items-center justify-center space-x-2">
                <span>Already have an account? </span>
                <Link
                  href="/sign-in"
                  className="font-medium text-primary hover:underline flex items-center justify-center gap-1"
                >
                  Login <ArrowRight size={14} className="text-primary" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </FormProvider>
  );
};

export default Page;
