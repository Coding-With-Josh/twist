import React, { ReactNode } from "react";

import localFont from "next/font/local";
import { Sidebar } from "@/components/dashboard/sidebar";

const nunitoSans = localFont({
  src: "../fonts/NunitoSans_10pt-Regular.ttf",
  variable: "--font-geist-sans",

});

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={`${nunitoSans.className} flex items-center justify-center w-screen h-screen gap-[2rem]`}>
    <Sidebar/>
    {children}</div>;
};

export default DashboardLayout;
