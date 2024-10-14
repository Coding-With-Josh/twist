"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingBag,
  ShoppingBagIcon,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import { ModeToggle, ModeToggleIcon } from "../ui/mode-toggle";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  // const router = useRouter(); // Get the router instance
  // const currentPath = router.pathname;
  const pathname = usePathname(); // Get the current path

  // Define a function to determine the icon color based on the current path
  const colorUrlBig = () => {
    return (
      pathname === "/dashboard" ||
      pathname === "/dashboard/discover" ||
      pathname === "/dashboard/marketplace" ||
      pathname === "/dashboard/analytics" ||
      pathname === "/dashboard/monetization"
        ? "bg-accent text-accent-foreground"
        : ""
    );
  };

  const colorUrlSmall = () => {
    return (
      pathname === "/dashboard" ||
      pathname === "/dashboard/discover" ||
      pathname === "/dashboard/marketplace" ||
      pathname === "/dashboard/analytics" ||
      pathname === "/dashboard/monetization"
        ? "text-accent-foreground"
        : ""
    );
  };

  return (
    <>
      <div>
        <div className="fixed backdrop-blur-md bottom-0 z-10 min-h-fit py-1 lg:hidden md:hidden w-screen flex-col border-t bg-background/80">
          <div className="flex items-center px-2 py-4 w-full h-full">
            <div className="flex items-center justify-center space-x-5 text-lg font-medium w-full h-full">
              <Link
                href="/dashboard"
                className={`${colorUrlSmall} flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
              >
                <Home className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard/discover"
                className={`${colorUrlSmall} flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
              >
                <Search className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard/analytics"
                className={`${colorUrlSmall} flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
              >
                <LineChart className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard/marketplace"
                className={`${colorUrlSmall} flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
              >
                <ShoppingCart className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard/monetization"
                className={`${colorUrlSmall} flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
              >
                <DollarSign className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard/settings"
                className={`${colorUrlSmall} flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
              >
                <Settings className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <aside className="fixed inset-y-0 left-4 hidden lg:hidden md:flex md:w-16 w-32 border-r md:pr-4 flex-col sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-4">
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Engage</span>
            </Link>
            <div className="flex flex-col items-center justify-center gap-4 mt-[7rem] xl:mt-[10.7rem] rounded-lg w-full px-2 py-2 bg-background/20 backdrop-blur-md">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard"
                      className={`${colorUrlBig} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <Home className="h-5 w-5" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Home</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/discover"
                      className={`${colorUrlBig} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Discover</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Discover</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/analytics"
                      className={`${colorUrlBig} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <LineChart className="h-5 w-5" />
                      <span className="sr-only">Analytics</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Analytics</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/marketplace"
                      className={`${colorUrlBig} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span className="sr-only">Marketplace</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Marketplace</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/monetization"
                      className={`${colorUrlBig} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <DollarSign className="h-5 w-5" />
                      <span className="sr-only">Monetization</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Monetization</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4 rounded-lg w-full bg-background/20 backdrop-blur-md">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/dashboard/settings"
                    className={`${colorUrlBig} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <ModeToggle />
          </nav>
        </aside>
      </div>

      <div>
        <aside className="fixed inset-y-0 left-6 hidden md:hidden lg:flex md:w-16 min-w-fit border-r flex-col sm:flex">
          <nav className="flex flex-col items-start gap-4 py-4 pl-2 pr-[3.2rem] pt-[1.7rem]">
            <div className="w-full flex items-center justify-start gap-[1rem]">
              <Link
                href="/"
                className="group flex min-h-fit min-w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
              <span className="">Engage</span>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 mt-[2.5rem] xl:mt-[3.2rem] rounded-lg w-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard"
                      className={`${colorUrlBig} flex min-h-fit min-w-fit items-center justify-center rounded-lg gap-[0.9rem] text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <Home className="h-5 w-5" />
                      <span className="">Home</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Home</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/discover"
                      className={`${colorUrlBig} flex min-h-fit min-w-fit items-center justify-center rounded-lg gap-[0.9rem] text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <Search className="h-5 w-5" />
                      <span className="">Discover</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Discover</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/analytics"
                      className={`${colorUrlBig} flex min-h-fit min-w-fit items-center justify-center rounded-lg gap-[0.9rem] text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <LineChart className="h-5 w-5" />
                      <span className="">Analytics</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Analytics</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/marketplace"
                      className={`${colorUrlBig} flex min-h-fit min-w-fit items-center justify-center rounded-lg gap-[0.9rem] text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span className="">Marketplace</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Marketplace</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/dashboard/monetization"
                      className={`${colorUrlBig} flex min-h-fit min-w-fit items-center justify-center rounded-lg gap-[0.9rem] text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                    >
                      <DollarSign className="h-5 w-5" />
                      <span className="">Monetization</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Monetization</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </nav>
          <nav className="mt-auto flex flex-col items-start gap-4 px-2 py-4 rounded-lg w-full bg-background/20 backdrop-blur-md">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/dashboard/settings"
                    className={`${colorUrlBig} flex min-h-fit min-w-fit items-center justify-center gap-[0.9rem] rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                  >
                    <Settings className="h-5 w-5" />
                    <span className="">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex items-center justify-center gap-[0.9rem]">
              {" "}
              <ModeToggleIcon />
              <span>Theme</span>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};
