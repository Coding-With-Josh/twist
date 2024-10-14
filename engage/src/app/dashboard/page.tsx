import React from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { MakeAPost } from "@/components/dashboard/make_a_post";
import { Suggestions } from "@/components/dashboard/suggestions";
import { Post } from "@/components/dashboard/post";


const Page = () => {
  return (
    <div className="w-screen h-screen px-7">
      <Sidebar />
      <div className="lg:flex flex-col items-center justify-center gap-4 mt-7 w-full">
        <div className="flex flex-col h-full items-center justify-center gap-4">

        <MakeAPost />
        <Post/>
        </div>
        <Suggestions />
      </div>

    </div>
  );
};

export default Page;
