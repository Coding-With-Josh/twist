import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen flex items-center flex-col space-y-[2rem] justify-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {" "}
      <Link href="/sign-in" className="hover:underline">Sign in</Link>
      <Link href="/sign-up" className="hover:underline">Sign up</Link>
    </div>
  );
}
  