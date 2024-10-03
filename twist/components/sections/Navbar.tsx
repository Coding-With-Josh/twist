"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogoSvg } from "@/assets/svg/logo";

export const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  // function onMenuOpen () {
  //   setisMenuOpen(true)
  // }
  function onMenuClose() {
    setisMenuOpen(!isMenuOpen);
  }


  return (
    <nav className="fixed top-0 left-0 right-0 z-[5000] bg-background/15 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              <LogoSvg/>
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center space-x-4 text-sm">
            
            
            <div className="relative group">
              <Button variant="link" className="text-white">
                Products <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card/60 backdrop-blur-lg border border-primary-foreground/10 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-200">Learn</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-200">Transact 2</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-200">Stream</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Button variant="link" className="text-white">
                Products <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card/60 backdrop-blur-lg border border-primary-foreground/10 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/products#learn" className="block px-4 py-2 text-sm text-gray-200">Learn</Link>
                  <Link href="/products#transact" className="block px-4 py-2 text-sm text-gray-200">Transact</Link>
                  <Link href="/products#stream" className="block px-4 py-2 text-sm text-gray-200">Stream</Link>
                </div>
              </div>
            </div>
            <Link href="#" className="text-white hover:text-white/80">
              For Agencies
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              For Developers
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              For Educators
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
              Join waitlist
            </Button>
          </div>
          <div className="lg:hidden">
            <Button variant="ghost" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
    