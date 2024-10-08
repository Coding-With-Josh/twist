import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { db } from "@/lib/db";


const font = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const nunitoSans = localFont({
  src: "./fonts/NunitoSans_10pt-Regular.ttf",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Engage by Twist",
  description: "The modern socisl media content software",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await db.user.findMany;
  return (
    <html lang="en">
      <body className={`${font.className} ${nunitoSans.className}`}>
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
