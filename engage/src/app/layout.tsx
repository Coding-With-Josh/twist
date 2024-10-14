import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
// import { db } from "@/lib/db";

const nunitoSans = localFont({
  src: "./fonts/NunitoSans_10pt-Regular.ttf",
  variable: "--font-geist-sans",

});

export const metadata: Metadata = {
  title: "Engage by Twist",
  description: "The modern social media content software",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await db.user.findMany;
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
