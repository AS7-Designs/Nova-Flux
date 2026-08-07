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
        className="page-top-padding pb-16 md:pb-24"
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
      {/* Two Ways to Connect */}
      <section className="py-12 bg-card/40 border-y border-border/50">
        <div className="container container-large">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">Two Ways to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="rounded-2xl md:rounded-3xl border border-border/70 bg-card p-6 md:p-8 flex flex-col justify-between h-full text-center transition-colors hover:border-primary/40 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Book a Discovery Call</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    The best way to start. A focused conversation about your business, your network, and what you are trying to build. No pitch, no pressure.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <a href="#demo-form" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
                    Schedule a Discovery Call →
                  </a>
                </div>
              </div>

              <div className="rounded-2xl md:rounded-3xl border border-border/70 bg-card p-6 md:p-8 flex flex-col justify-between h-full text-center transition-colors hover:border-primary/40 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Send Us a Message</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Prefer to write first? Send your query using our contact form above or reach us via email directly. We will get back to you within one hour.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <a href="mailto:info@novadirectsoftware.com" className="inline-flex items-center justify-center rounded-full border border-border bg-background text-foreground px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors">
                    info@novadirectsoftware.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

