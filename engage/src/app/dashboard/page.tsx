"use client"

import React from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { MakeAPost } from "@/components/dashboard/make_a_post";
import { Suggestions } from "@/components/dashboard/suggestions";
import { Post } from "@/components/dashboard/post";


const Page = () => {
  return (
    <div className="w-screen h-screen px-7">
      <Sidebar pathname="/dashboard" />
      <div className="lg:flex xl:flex flex flex-col items-center justify-center gap-4 mt-7 w-full">
        <div className="flex flex-col h-full items-center justify-center gap-4">

          <MakeAPost />
          <Post
            postImage={require("@/assets/images/pic.png")}
            profileImage={require("@/assets/images/avatars/7.png")}
            postText="Hey guyss... Todays my birthday"
            profileName="Teresa Pere"
            username="terypp"
          />
          <Post
            postImage={require("@/assets/images/purple.png")}
            profileImage={require("@/assets/images/avatars/8.png")}
            postText="Hey guyss... Just finished landing page"
            profileName="John Doe"
            username="johnydee"
          />
          <Post
            postImage={require("@/assets/images/h.jpg")}
            profileImage={require("@/assets/images/avatars/9.png")}
            postText="Can we duet @johnydee"
            profileName="Elon Musk"
            username="ellymusk"
          />
        </div>
        <Suggestions />
      </div>

    </div>
  );
};

export default Page;
