"use client"

import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const MakeAPost = () => {
  return (
    <div className="min-w-fit flex items-center justify-center gap-2 p-4 border rounded-lg bg-background shadow-md">
      {/* Profile Image */}
      <Image
        src={require("@/assets/images/avatars/4.png")} // Replace with the actual path to the profile image
        alt="Profile"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full mr-4"
      />

      {/* Text Input Area */}
      <Input
        type="text"
        placeholder="What's on your mind?" />

      {/* Send Button */}
      <Button size={"icon"}>
        <Send className="h-5 w-5" />
      </Button>
    </div>)
}
