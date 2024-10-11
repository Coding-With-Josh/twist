import React from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { MakeAPost } from "@/components/dashboard/make_a_post";
import { Suggestions } from "@/components/dashboard/suggestions";


const Page = () => {
  return (
    <div className="flex items-start justify-between gap-[2rem] pr-4">
     <MakeAPost/>
     <Suggestions/>
    </div>
  );
};

export default Page;
