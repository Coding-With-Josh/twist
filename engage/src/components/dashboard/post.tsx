"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { Bookmark, Heart, LucideCircleChevronLeft, MessageCircle, X } from "lucide-react"
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import Image from "next/image"


type postData = {
    postText: string
    postImage: string
    profileName: string
    profileImage: string
    username: string
}

export const Post = ({ postText, postImage, profileName, profileImage, username }: postData) => {
    const [ispopoverVisible, setIsPopoverVisible] = useState(false)


    return (
        <>{ispopoverVisible ? (
            <div className="w-screen h-screen z-[5000] backdrop-blur-md flex items-center justify-center">
                <div className="p-4 relative flex items-center justify-center border rounded-md">
                    <div className="flex items-center justify-center absolute p-1 border rounded-full top-6 right-6" onClick={() => setIsPopoverVisible(false)}>
                        <X className="h-4 w-4" />
                    </div>
                    <Image
                        src={postImage} // Replace with the actual path to the profile image
                        alt="Post image"
                        width={370}
                        height={370}
                        className="h-full w-full rounded-sm mr-4"
                    />
                </div>
            </div>
        ) : (<></>)}
            <Card className="w-full z-0">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center justify-center">
                            <Image
                                src={profileImage} // Replace with the actual path to the profile image
                                alt="Profile"
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full mr-4"
                            />
                            <div className="">
                                <h2 className="text-sm font-normal tracking-normal">{profileName}</h2>
                            <span className="text-xs font-thin tracking-normal">@{username}</span></div>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger><DotsVerticalIcon /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-card/60 backdrop-blur-md p-3 rounded-md border font-normal">
                                <DropdownMenuItem className="w-full">
                                    Follow
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Repost
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Quote
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col justify-center items-start gap-6">
                        <h2 className="text-[0.9rem] text-left">{postText}</h2>
                        <Image
                            src={postImage} // Replace with the actual path to the profile image
                            alt="Post image"
                            width={370}
                            height={370}
                            className="h-full w-full rounded-sm mr-4"
                            onClick={() => setIsPopoverVisible(true)}
                        />

                    </div>
                    <div className="my-6 h-[1px] w-full bg-border" />
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <Heart className="cursor-pointer h-5 w-5" fill="red" stroke="red" />
                            <MessageCircle className="cursor-pointer h-5 w-5" />
                            <Bookmark className="cursor-pointer h-5 w-5" />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <LucideCircleChevronLeft className="cursor-pointer h-5 w-5" />

                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}