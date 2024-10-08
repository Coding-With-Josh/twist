"use client"

import { ContainerScroll } from "@/components/home/container-scroll";
import Loading from "@/components/reusable/Loading";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Simulate a data fetch
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
}, []);

if (loading) {
    return <Loading />;
}

  return (
    // <div className="absolute top-0 z-[-2] h-screen w-screen flex items-center flex-col space-y-[2rem] justify-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <div className="flex items-center flex-col justify-center">
      {" "}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
