"use client";
import { BarChart3, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import Logo from "@/components/layout/logo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/utility/theme-toggle";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { label: "Reward Models", href: "/reward-models" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

const ACTION_BUTTONS = [
  { label: "Schedule a Demo", href: "/contact", variant: "default" as const },
];

const navLinkClassName =
  "bg-popover hover:bg-accent focus:bg-accent data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const hideNavbar = ["/signin", "/signup", "/docs", "/not-found", "/forgot-password"].some((route) =>
    pathname.includes(route),
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  if (hideNavbar) return null;

  return (
    <header
      className={cn(
        "bg-popover relative isolate z-50 lg:bg-transparent",
        "lg:fixed lg:inset-x-0 lg:top-[var(--banner-height,0px)] lg:translate-y-[18px]",
      )}
    >
      <div className="lg:bg-popover/90 relative z-50 container grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center px-4 lg:py-3 lg:pr-3 lg:pl-6 lg:rounded-full lg:border lg:border-border/70 lg:backdrop-blur-md">
        <div className="flex items-center justify-start">
          <Logo className="shrink-0" />
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {NAV_LINKS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      navLinkClassName,
                      "px-4 text-xs md:text-sm font-medium transition-colors hover:text-foreground rounded-full",
                      pathname === item.href && "bg-accent font-semibold text-foreground"
                    )}
                    suppressHydrationWarning
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center justify-end gap-3">
          <ThemeToggle />
          {ACTION_BUTTONS.map((button) => (
            <Button
              key={button.label}
              size="sm"
              variant={button.variant}
              className="rounded-full font-semibold px-5 text-xs md:text-sm h-9.5"
              asChild
            >
              <Link href={button.href}>{button.label}</Link>
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="text-muted-foreground relative flex size-8 rounded-sm border lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className={cn("absolute top-1/2 left-1/2 block w-4 -translate-x-1/2 -translate-y-1/2")}>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5",
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen ? "opacity-0" : "",
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5",
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "bg-popover text-popover-foreground fixed inset-0 z-40 flex flex-col justify-between tracking-normal transition-opacity duration-300 ease-out lg:hidden",
          "pt-[calc(var(--header-height)+var(--banner-height,0px))]",
          isMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="container">
          <NavigationMenu orientation="vertical" className="inline-block w-full max-w-none py-10">
            <NavigationMenuList className="w-full flex-col items-start gap-0">
              {NAV_LINKS.map((item) => (
                <NavigationMenuItem key={item.label} className="w-full">
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      "hover:text-foreground block px-2 py-3 text-lg font-medium transition-colors",
                      pathname === item.href && "font-semibold text-primary",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    suppressHydrationWarning
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-col gap-3 border-t px-6 py-4">
          {ACTION_BUTTONS.map((button) => (
            <Button
              key={button.label}
              variant={button.variant}
              asChild
              className="h-12 w-full rounded-full shadow-sm"
            >
              <Link href={button.href} onClick={() => setIsMenuOpen(false)}>
                {button.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
