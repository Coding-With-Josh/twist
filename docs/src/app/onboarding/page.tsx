"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ChevronLeft, ChevronLeftCircle } from "lucide-react";
import React, { useState } from "react";

const OnboardingForm = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const details = [email, password, name];

  return (
    <div className="text-foreground absolute top-0 z-[-2] h-screen w-screen flex items-center flex-col space-y-[2rem] justify-center bg-background">
      <ModeToggle className="text-foreground/80 absolute top-[2rem] left-[2rem]" />
      <ChevronLeftCircle className="text-foreground/80 absolute top-[2rem] left-[2rem]" />
      {step === 0 && (
        <div className="border border-mutedforeground py-[3rem] px-[3rem]">
          <h2 className="text-foreground">Step 1: Enter your Name</h2>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h2 className="text-foreground">Step 2: Enter your Email</h2>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={() => setStep(step - 1)}>Back</Button>
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-foreground">Step 3: Enter your Password</h2>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => setStep(step - 1)}>Back</Button>
          <Button onClick={() => console.log(details)}>Submit</Button>
        </div>
      )}
    </div>
  );
};

export default OnboardingForm;
