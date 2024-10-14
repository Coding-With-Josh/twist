import React from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { MakeAPost } from "@/components/dashboard/make_a_post";
import { Suggestions } from "@/components/dashboard/suggestions";


const Page = () => {
  return (
    <div className="px-7 grid grid-cols-2 gap-2">
      <Sidebar />
      <MakeAPost />
      <Suggestions />
    </div>
  );
};

export default Page;
