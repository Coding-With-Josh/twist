import { InlineSnippet } from "@/components/form/domain-configuration";
import { Button } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      
      <h1 className="text-white">
        Home page
      </h1>
    <Link href="/login">
      <Button>Login</Button>
      </Link>
    </div>
  );
}
