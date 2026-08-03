export const siteConfig = {
  name: "NovaDirect",
  legalName: "Corivance Solutions Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novadirectsoftware.com",
  description:
    "NovaDirect brings every part of your direct selling operation together into one modern platform, built specifically around the way your network works, all under your brand.",
  tagline: "Built for Businesses That Grow Through People.",

  logo: {
    src: "/images/nova-logo.png",
    alt: "NovaDirect logo",
  },

  contact: {
    sales: {
      label: "Email Us",
      email: "info@novadirectsoftware.com",
    },
    support: {
      label: "Website",
      email: "novadirectsoftware.com",
    },
    phone: {
      label: "Response Time",
      display: "Within 1 hour",
      href: "/contact",
    },
    office: {
      label: "Headquarters",
      display: "India",
      href: "/contact",
    },
    chat: {
      label: "Discovery Call",
      display: "Schedule a Discovery Call",
      href: "/contact",
    },
  },

  social: {
    linkedin: {
      url: "https://www.linkedin.com/company/novadirectsoftware",
      label: "LinkedIn",
    },
  },

  footer: {
    cta: {
      text: "Schedule a Discovery Call",
      url: "/contact",
      avatar: "/images/avatars/1.webp",
    },
  },

  metadata: {
    title: {
      default: "NovaDirect — Direct Selling & Network Management Platform",
      template: "%s | NovaDirect",
    },
    keywords: [
      "NovaDirect",
      "Direct Selling Software",
      "MLM Software",
      "Commission Management",
      "Distributor Network Platform",
      "Compensation Engine",
      "Affiliate Management",
    ],
    authors: [{ name: "NovaDirect Software" }],
    creator: "Corivance Solutions Private Limited",
    publisher: "NovaDirect Software",
    openGraph: {
      image: "/images/og-image.jpg",
      imageAlt: "NovaDirect — Built for Businesses That Grow Through People",
    },
    twitter: {
      creator: "@novadirect",
    },
  },
} as const;

export type ContactDetailIcon = "mail" | "phone" | "map-pin" | "chat";

export interface ContactDetailItem {
  label: string;
  value: string;
  href: string;
  icon: ContactDetailIcon;
}

export function getFooterBottomLinks() {
  const { contact } = siteConfig;

  return [
    { text: contact.sales.email, url: "mailto:info@novadirectsoftware.com" },
    { text: contact.support.email, url: "https://novadirectsoftware.com" },
    { text: "Privacy Policy", url: "/privacy-policy" },
  ];
}

export function getContactDetailItems(): ContactDetailItem[] {
  const { contact } = siteConfig;

  return [
    {
      label: contact.sales.label,
      value: contact.sales.email,
      href: "mailto:info@novadirectsoftware.com",
      icon: "mail",
    },
    {
      label: contact.chat.label,
      value: contact.chat.display,
      href: contact.chat.href,
      icon: "chat",
    },
    {
      label: contact.phone.label,
      value: contact.phone.display,
      href: contact.phone.href,
      icon: "phone",
    },
    {
      label: contact.office.label,
      value: contact.office.display,
      href: contact.office.href,
      icon: "map-pin",
    },
  ];
}

