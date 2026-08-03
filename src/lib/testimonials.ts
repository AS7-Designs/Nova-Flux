export const testimonials = [
  {
    quote:
      "Flux turned our follow-ups from a daily chore into something that just happens. We close more deals with half the admin work.",
    highlightedWords: ["follow-ups", "close", "deals", "admin"],
    author: "Sarah Mitchell",
    role: "Head of Sales",
    company: "Claude",
    image: "/images/people/sarah-mitchell.webp",
    logo: "/images/partners/claude.svg",
    logoClassName: "",
  },
  {
    quote:
      "The AI scoring alone paid for itself in the first month. Our reps finally know which deals deserve their attention.",
    highlightedWords: ["AI", "scoring", "paid", "attention"],
    author: "Alex Chen",
    role: "Revenue Operations",
    company: "PostHog",
    image: "/images/people/alex-chen.webp",
    logo: "/images/partners/posthog.svg",
    logoClassName: "",
  },
  {
    quote:
      "We plugged Flux into our stack in a week. Pipelines update themselves and handoffs between teams are actually smooth now.",
    highlightedWords: ["week", "Pipelines", "smooth"],
    author: "Marcus Johnson",
    role: "VP Sales",
    company: "Vercel",
    image: "/images/people/marcus-johnson.webp",
    logo: "/images/partners/vercel.svg",
    logoClassName: "dark:invert",
  },
  {
    quote: "Every customer signal lands in one place. Flux drafts the next move before we even open the CRM.",
    highlightedWords: ["signal", "Flux", "drafts", "CRM"],
    author: "Emily Davis",
    role: "Account Executive",
    company: "Meta",
    image: "/images/people/emily-davis.webp",
    logo: "/images/partners/meta.svg",
    logoClassName: "",
  },
] as const;

export const homepageTestimonials = testimonials.map(({ quote, author, role, company, image }) => ({
  quote,
  author,
  role,
  company,
  image,
}));

export const demoTestimonials = testimonials
  .slice(0, 3)
  .map(({ quote, highlightedWords, author, role, company, image, logo, logoClassName }) => ({
    companyLogo: logo,
    companyLogoClassName: logoClassName,
    quote: {
      fullQuote: quote,
      highlightedWords: [...highlightedWords],
    },
    author: {
      name: author,
      designation: `${role}, ${company}`,
      profilePicture: image,
    },
  }));
