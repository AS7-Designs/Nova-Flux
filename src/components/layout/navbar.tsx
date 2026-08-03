"use client";
import ChartSquareLinear from "@iconify-react/solar/chart-square-linear";
import UsersGroupRoundedLinear from "@iconify-react/solar/users-group-rounded-linear";
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
  {
    label: "Platform",
    href: "/#platform",
    subitems: [
      {
        label: "Your People",
        href: "/#layer-people",
        description: "Build, manage and grow your distributor network.",
        icon: UsersGroupRoundedLinear,
      },
      {
        label: "Your Products",
        href: "/#layer-products",
        description: "Physical, digital, memberships and subscriptions.",
        icon: ChartSquareLinear,
      },
      {
        label: "Your Compensation",
        href: "/#layer-compensation",
        description: "Custom commission logic, multi-level & bonus models.",
        icon: ChartSquareLinear,
      },
      {
        label: "Your Payments",
        href: "/#layer-payments",
        description: "Gateways, eWallets, payouts, and compliance.",
        icon: ChartSquareLinear,
      },
      {
        label: "Your Control",
        href: "/#layer-control",
        description: "Unified admin panel and role-based access.",
        icon: UsersGroupRoundedLinear,
      },
    ],
  },
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
      <div className="lg:bg-popover relative z-50 container flex h-[var(--header-height)] items-center justify-between gap-4 lg:h-[calc(var(--header-height)-20px)] lg:rounded-full lg:shadow-sm lg:backdrop-blur-md">
        <Logo className="" />

        <div className="flex items-center gap-8">
          <NavigationMenu viewport={false} className="hidden lg:block">
            <NavigationMenuList className="">
              {NAV_LINKS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.subitems ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "cursor-pointer [&_svg]:ms-2 [&_svg]:size-4",
                          navLinkClassName,
                          pathname.startsWith(item.href) && "bg-accent font-semibold",
                        )}
                        suppressHydrationWarning
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="">
                        <ul className="grid w-[263px] gap-2">
                          {item.subitems.map((subitem) => (
                            <li key={subitem.label}>
                              <NavigationMenuLink href={subitem.href} className="hover:bg-accent/50 flex-row gap-3 p-3">
                                <subitem.icon className="text-foreground size-5.5" />
                                <div className="flex flex-col gap-1">
                                  <div className="text-sm font-medium tracking-normal">{subitem.label}</div>
                                  <div className="text-muted-foreground text-xs leading-snug">
                                    {subitem.description}
                                  </div>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        navLinkClassName,
                        pathname === item.href && "bg-accent font-semibold",
                      )}
                      suppressHydrationWarning
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center justify-end gap-4 lg:flex">
            <ThemeToggle />
            {ACTION_BUTTONS.map((button) => (
              <Button
                key={button.label}
                size="sm"
                variant={button.variant}
                className="rounded-full shadow-none"
                asChild
              >
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2 lg:hidden lg:gap-4">
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
                  {item.subitems ? (
                    <Accordion type="single" collapsible className="">
                      <AccordionItem value={item.label} className="border-none">
                        <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between px-2 py-2.5 text-base font-normal hover:no-underline">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="pt-0 pb-0">
                          <div className="space-y-0">
                            {item.subitems.map((subitem) => (
                              <NavigationMenuLink
                                key={subitem.label}
                                href={subitem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                  "text-muted-foreground hover:bg-accent/50 flex flex-row gap-2 px-2 py-2 font-medium transition-colors",
                                  pathname === subitem.href && "bg-accent font-semibold",
                                )}
                                suppressHydrationWarning
                              >
                                <subitem.icon className="size-5" />
                                <span className="">{subitem.label}</span>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "hover:text-foreground block px-2 py-2.5 text-base transition-colors",
                        pathname === item.href && "font-semibold",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                      suppressHydrationWarning
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-col gap-3 border-t px-6 py-4">
          {ACTION_BUTTONS.map((button) => (
            <Button
              key={button.label}
              variant={button.variant === "ghost" ? "outline" : button.variant}
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
