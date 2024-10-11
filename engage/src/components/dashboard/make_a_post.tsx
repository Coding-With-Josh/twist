import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const MakeAPost = () => {
  return (
<div className="flex items-center p-4 border rounded-lg bg-background shadow-md">
      {/* Profile Image */}
      <Image
        src={require("@/assets/images/avatars/4.png")} // Replace with the actual path to the profile image
        alt="Profile"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full mr-4"
      />
      
      {/* Text Input Area */}
      <input
        type="text"
        placeholder="What's on your mind?"
        className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
      />
      
      {/* Send Button */}
      <button className="ml-2 p-2 bg-accent text-white rounded-lg hover:bg-accent-dark">
        <Send className="h-5 w-5" />
      </button>
    </div>  )
}
