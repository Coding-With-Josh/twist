import type { Metadata } from "next";
import { Inter, Nunito_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/reusable/loader";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Twist Platform",
  description: "Just with a twist...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Loader/>
      <body className={font.className}>{children}</body>
    </html>
  );
}
