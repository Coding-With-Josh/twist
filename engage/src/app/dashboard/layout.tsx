import React, { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],

});

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={font.className}>{children}</div>;
};

export default DashboardLayout;
