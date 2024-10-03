"use client"

import { JoinWaitlistForm } from "@/components/forms/join-waitlist";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Navbar/>
      <Hero/>
      <JoinWaitlistForm/>
    </div>
  );
}