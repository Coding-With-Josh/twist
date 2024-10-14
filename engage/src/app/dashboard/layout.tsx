import React, { ReactNode } from "react";

import localFont from "next/font/local";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Metadata } from "next";
import { CommandDialogDemo } from "@/components/reusable/commandmenu";

const nunitoSans = localFont({
  src: "../fonts/NunitoSans_10pt-Regular.ttf",
  variable: "--font-geist-sans",

});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "The modern social media content software",
};


const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={nunitoSans.className}>
    {/* return <div className={`${nunitoSans.className} lg:flex md:flex flex-col items-center justify-center w-screen h-screen gap-[2rem]`}> */}
    <CommandDialogDemo />

    {children}</div>;
};

export default DashboardLayout;
