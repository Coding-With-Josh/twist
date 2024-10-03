import React from "react";
import { Spotlight } from "../ui/spotlight";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center -mt-[2rem]  xs:-mt-0 md:-mt-[9rem] lg:[9rem]">
      <div className="h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-primary to-transparent blur-[15rem] z-0 absolute top-[2rem]" />
      <div className="w-screen h-screen items-center justify-center flex flex-col bg-background/15 backdrop-blur-sm">
        <div className="my-[2rem] px-4 py-1 gap-2 bg-[#1919F9]/10 min-h-fit min-w-fit text-primarylight border border-primary rounded-full flex items-center justify-center mb-4">
          <Star />
          <span>Every other thing- But with a twist...</span>
        </div>
        <h1 className="text-center text-[2.7rem] font-bold uppercase">
          A New{" "}
          <span className="bg-gradient-to-r from-primary to-white/90 bg-clip-text text-transparent">
            ERA
          </span>{" "}
          deserves a New{" "}
          <span className="bg-gradient-to-r from-primary to-white/90 bg-clip-text text-transparent"> TOOL</span>
        </h1>
        <p className="text-md text-center text-gray-400 max-w-3xl mb-8">
          Create and own assets that grow, evolve, and adapt with you across
          multiple worlds. Seamlessly transition between games with assets that
          reflect your journey and achievements.
        </p>
        <Button size="sm" className="text-[0.8rem] px-5 text-gray-200">
          Join the waitlist
        </Button>
        
      </div>
    </div>
  );
};
