import type { Metadata } from "next";

import BookADemo from "@/components/sections/book-a-demo";
import ContactDetails from "@/components/sections/contact-details";
import ContactFaq from "@/components/sections/contact-faq";
import { getContactDetailItems, siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Book a discovery call or send a message to NovaDirect. We reply within one hour.`,
  openGraph: {
    title: `Contact NovaDirect`,
    description: `Book a discovery call or send a message to NovaDirect. We reply within one hour.`,
    url: "/contact",
  },
};

const contactFaqs = [
  {
    question: "What happens during a discovery call?",
    answer:
      "A discovery call is a real conversation about your network, your compensation model, and your goals. No sales pitch, no pressure. We listen, ask questions, and determine how NovaDirect can best be configured for your business.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Timelines depend on the complexity of your compensation model and required integrations. Straightforward setups can go live in weeks, while multi-level global platforms are scoped transparently with clear delivery milestones.",
  },
  {
    question: "How does pricing work?",
    answer:
      "NovaDirect engagements are project-based. Investment is scoped individually based on your specific requirements before any build begins. There are no hidden fees.",
  },
  {
    question: "How quickly do you respond to messages?",
    answer:
      "We read every enquiry personally and respond within one hour with a real response, not an automated reply.",
  },
  {
    question: "What ongoing support options are available?",
    answer:
      "We offer flexible support including Annual Maintenance Contracts (AMC) for year-round coverage, as well as Hourly Support for on-demand assistance.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BookADemo
        className="page-top-padding !pb-0"
        header={{
          heading: "Let's Talk About Your Business",
          description: {
            text: "Whether you are ready to start or just exploring what NovaDirect can do for you, we would love to hear from you.",
          },
          avatars: [
            {
              image: "/images/avatars/1.webp",
              avatarClassName: "border-blue-500",
              cursorClassName: "text-blue-500 fill-blue-500",
            },
            {
              image: "/images/people/david-kim.webp",
              avatarClassName: "border-cyan-500",
              cursorClassName: "text-cyan-500 fill-cyan-500",
            },
          ],
        }}
      />
      <ContactDetails containerClass="container-large" items={getContactDetailItems()} />
      <ContactFaq
        containerClass="container-large"
        title="Frequently asked questions"
        description="Common questions about discovery calls, platform scoping, implementation, and support."
        items={contactFaqs}
      />
    </>
  );
}

