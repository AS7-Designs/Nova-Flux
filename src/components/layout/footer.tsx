"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

import Logo from "@/components/layout/logo";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { getFooterBottomLinks, siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

interface SocialLink {
  icon: ComponentType<{ className?: string }>;
  url: string;
  label: string;
}

interface MenuLink {
  text: string;
  url: string;
  isExpandable?: boolean;
  subitems?: {
    text: string;
    url: string;
    description?: string;
    icon?: ComponentType<{ className?: string }>;
  }[];
}

interface MenuItem {
  title: string;
  links: MenuLink[];
}

interface FooterCta {
  text: string;
  url: string;
  avatar?: string;
}

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    title: "Platform",
    links: [
      { text: "Overview", url: "/" },
      { text: "Reward Models", url: "/reward-models" },
      { text: "Work With Us", url: "/work-with-us" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "Contact Us", url: "/contact" },
      { text: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  {
    title: "Connect",
    links: [
      { text: "info@novadirectsoftware.com", url: "mailto:info@novadirectsoftware.com" },
      { text: "LinkedIn", url: "https://www.linkedin.com/company/novadirectsoftware" },
    ],
  },
];

const SOCIAL_ICONS = {
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  github: FaGithub,
  youtube: FaYoutube,
  instagram: FaInstagram,
} as const;

const DEFAULT_SOCIAL_LINKS: SocialLink[] = Object.entries(siteConfig.social).map(([platform, { url, label }]) => ({
  icon: SOCIAL_ICONS[platform as keyof typeof SOCIAL_ICONS],
  url,
  label,
}));

function SocialLinks({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <div className="flex gap-4">
      {socialLinks.map((socialLink) => {
        const Icon = socialLink.icon;
        return (
          <a
            href={socialLink.url}
            key={socialLink.label}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialLink.label}
            className="text-white/60 transition-colors hover:text-white"
          >
            <Icon className="size-6" />
          </a>
        );
      })}
    </div>
  );
}

function FooterCtaLink({ cta }: { cta: FooterCta }) {
  return (
    <Link href={cta.url}>
      <div className="flex items-center gap-3">
        {cta.avatar ? <img src={cta.avatar} alt="" className="size-8 shrink-0 rounded-full object-cover" /> : null}
        <p className="text-sm font-medium">{cta.text}</p>
        <div className="flex flex-1 justify-end">
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}

function FooterMenuLink({ link }: { link: MenuLink }) {
  if (link.isExpandable && link.subitems) {
    return (
      <Popover>
        <PopoverTrigger className="group inline-flex items-center gap-1 text-base text-white/60 transition-colors hover:text-white data-[state=open]:text-white">
          {link.text}
          <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          side="bottom"
          sideOffset={8}
          className="w-72 border-white/10 bg-neutral-900 p-2 text-white shadow-xl"
        >
          <div className="flex flex-col gap-1">
            {link.subitems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.text}
                  href={item.url}
                  className="flex gap-3 rounded-sm px-3 py-2 transition-colors hover:bg-white/10"
                >
                  {Icon ? <Icon className="mt-0.5 size-4 shrink-0 text-white/80" /> : null}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-white">{item.text}</span>
                    {item.description ? (
                      <span className="text-xs leading-snug text-white/60">{item.description}</span>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Link href={link.url} className="text-base text-white/60 transition-colors hover:text-white">
      {link.text}
    </Link>
  );
}

function FooterMenuItem({ menuItem }: { menuItem: MenuItem }) {
  return (
    <div className="flex min-w-[9rem] flex-col items-start gap-3 text-left lg:min-w-[10rem]">
      <h3 className="text-lg font-medium">{menuItem.title}</h3>
      {menuItem.links.map((link) => (
        <FooterMenuLink key={`${menuItem.title}-${link.text}`} link={link} />
      ))}
    </div>
  );
}

interface FooterProps {
  socialLinks?: SocialLink[];
  tagline?: string;
  cta?: FooterCta;
  menuItems?: MenuItem[];
  bottomLinks?: {
    text: string;
    url: string;
  }[];
  className?: string;
}

export default function Footer({
  socialLinks = DEFAULT_SOCIAL_LINKS,
  tagline = siteConfig.tagline,
  cta = siteConfig.footer.cta,
  menuItems = DEFAULT_MENU_ITEMS,
  bottomLinks = getFooterBottomLinks(),
  className,
}: FooterProps) {
  const pathname = usePathname();

  const hideFooter = ["/signin", "/signup", "/docs", "/not-found", "/forgot-password"].some((route) =>
    pathname.includes(route),
  );

  if (hideFooter) return null;

  return (
    <footer className={cn("relative overflow-hidden border-t border-white/10 bg-black py-32 text-white", className)}>
      {/* Giant masked wordmark watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden"
      >
        <span className="font-display translate-y-[35%] text-[14rem] leading-none font-bold tracking-tighter text-white/[0.02] select-none sm:text-[18rem] lg:text-[24rem]">
          NovaDirect
        </span>
      </div>

      {/* Wave pattern underlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <svg className="h-full w-full text-white" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-wave"
              width="20"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path d="M0 10 L10 0 L20 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-wave)" />
        </svg>
      </div>

      <div className="relative z-10 container">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="flex flex-col items-start">
              <Logo inverted />

              <div className="mt-16 flex gap-2 pb-6">
                <SocialLinks socialLinks={socialLinks} />
              </div>

              <p className="mt-4 max-w-sm border-b border-white/10 pb-4 text-2xl font-medium text-white">{tagline}</p>

              <div className="mt-4">
                <FooterCtaLink cta={cta} />
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:justify-items-start sm:gap-x-8 lg:ml-auto lg:w-auto lg:gap-x-16">
              {menuItems.map((menuItem, i) => (
                <div key={menuItem.title} className="relative">
                  {i > 0 && (
                    <div
                      aria-hidden
                      className="absolute top-0 bottom-0 -left-4 hidden w-px bg-white/[0.06] lg:-left-8 lg:block"
                    />
                  )}
                  <FooterMenuItem menuItem={menuItem} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-4 text-xs text-white/60 lg:flex-row">
            <p className="shrink-0">
              © {new Date().getFullYear()} NovaDirect Software (Corivance Solutions Private Limited). All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-0">
              {bottomLinks.map((link) => {
                const isExternal =
                  link.url.startsWith("mailto:") ||
                  link.url.startsWith("tel:") ||
                  link.url.startsWith("http") ||
                  link.url === "#";

                const linkClassName =
                  "border-white/20 transition-colors hover:text-white last:border-r-0 md:border-r-2 md:px-6";

                if (isExternal) {
                  return (
                    <a key={link.text} href={link.url} className={linkClassName}>
                      {link.text}
                    </a>
                  );
                }

                return (
                  <Link key={link.text} href={link.url} className={linkClassName}>
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
