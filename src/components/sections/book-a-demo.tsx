"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, MousePointer2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { demoTestimonials } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

interface Avatar {
  image: string;
  avatarClassName: string;
  cursorClassName: string;
  className?: string;
  delay?: number;
}

const BookADemoAvatar = ({ image, avatarClassName, cursorClassName, className, delay }: Avatar) => {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        animate={{
          x: [0, 10, 10, 0, 0],
          y: [0, 0, -10, -10, 0],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: delay ?? 0,
        }}
        className={cn("relative size-10 rounded-full border-2 p-[1px]", avatarClassName)}
      >
        <MousePointer2
          className={cn(
            "absolute right-full bottom-full shrink-0 translate-x-2/5 translate-y-2/5 !delay-0",
            cursorClassName,
          )}
          size={18}
        />
        <img src={image} alt="avatar" className="size-full rounded-full object-cover" />
      </motion.div>
    </div>
  );
};

interface Description {
  text: string;
  hyperlink?: string;
  url?: string;
}

interface Header {
  heading: string;
  description: Description;
  avatars: Avatar[];
}

const BookADemoHeader = ({ heading, description, avatars }: Header) => {
  return (
    <div className="relative flex w-full max-w-4xl flex-col items-center text-center">
      <div className="space-y-3 lg:space-y-4">
        <h1 className="text-3xl leading-[1.1] font-medium tracking-tighter md:text-5xl lg:text-6xl">{heading}</h1>

        <p className="text-muted-foreground text-base md:text-lg">
          {description.hyperlink && description.url ? (
            <>
              <span>{description.text.split(description.hyperlink)[0]}</span>
              <span className="text-foreground">
                <a href={description.url} className="underline">
                  {description.hyperlink}
                </a>
              </span>
              <span>{description.text.split(description.hyperlink)[1]}</span>
            </>
          ) : (
            description.text
          )}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <BookADemoAvatar className="absolute bottom-full left-full" {...avatars[0]} />
        <BookADemoAvatar className="absolute top-full right-full" delay={1} {...avatars[1]} />
      </div>
    </div>
  );
};

interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

const FormGroup = ({ children, className }: FormGroupProps) => {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
};

const BookADemoContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@novadirectsoftware.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New NovaDirect Inquiry from ${formData.name || "Website Visitor"}`,
          Name: formData.name,
          Company: formData.company,
          Email: formData.email,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:info@novadirectsoftware.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:info@novadirectsoftware.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border-b p-8 lg:border-r lg:border-b-0 flex flex-col items-center justify-center text-center space-y-4 min-h-[380px]">
        <div className="size-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <CheckCircle2 className="size-7 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
          Thank you for reaching out. Your message has been sent to <span className="font-semibold text-foreground">info@novadirectsoftware.com</span>. We read every message personally and will reply within 1 hour.
        </p>
        <Button
          variant="outline"
          className="rounded-full mt-2"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", company: "", email: "", message: "" });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border-b p-8 lg:border-r lg:border-b-0">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-3 gap-y-6">
        <FormGroup className="col-span-2 sm:col-span-1">
          <Label htmlFor="contact-name">Your Name</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="col-span-2 sm:col-span-1">
          <Label htmlFor="contact-company">Company Name</Label>
          <Input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Your Business Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="col-span-2">
          <Label htmlFor="contact-email">Email Address</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="col-span-2">
          <Label htmlFor="contact-message">What are you looking to build?</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            placeholder="Tell us about your business, compensation model, or network goals..."
            className="min-h-32"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </FormGroup>
        <Button type="submit" disabled={loading} className="col-span-2 rounded-full" size="lg">
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin mr-2" /> Sending...
            </>
          ) : (
            <>
              Send Message <ArrowRight className="size-4 ml-1" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

interface Author {
  name: string;
  designation: string;
  profilePicture: string;
}

interface Quote {
  fullQuote: string;
  highlightedWords: string[];
}

interface Testimonial {
  companyLogo: string;
  companyLogoClassName?: string;
  quote: Quote;
  author: Author;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const BookADemoTestimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="relative flex flex-col justify-between h-full p-8 lg:p-10 space-y-8 bg-card/40">
      <div className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            What Happens Next
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground mt-1">
            Personal Response Within 1 Hour
          </h3>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">
          We read every message personally. You will hear from us within one hour with a real response, not an automated reply.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          If your enquiry is a good fit for NovaDirect, we will suggest a discovery call to go deeper. If you have already booked a call, we will come prepared having reviewed anything you shared with us.
        </p>
      </div>

      <div className="pt-6 border-t border-border/40 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
          Other Ways to Reach Us
        </span>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">Email:</span>
            <a href="mailto:info@novadirectsoftware.com" className="text-primary hover:underline">
              info@novadirectsoftware.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">LinkedIn:</span>
            <a href="https://www.linkedin.com/company/novadirectsoftware" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              NovaDirect Software
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Footer {
  heading: string;
  logos: string[];
}

const BookADemoFooter = ({ heading, logos }: Footer) => {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center gap-14 text-center">
      <h3 className="text-muted-foreground text-sm font-medium">{heading}</h3>
      <div className="flex w-full flex-wrap items-center justify-center gap-10 md:grid md:grid-cols-5">
        {logos.map((logo, index) => {
          return (
            <img
              key={`book-a-demo-footer-logo-${index}`}
              src={logo}
              alt={`logo ${index + 1}`}
              className={cn("h-6 place-self-center object-contain md:h-8 dark:invert", index > 5 && "hidden md:block")}
            />
          );
        })}
      </div>
    </div>
  );
};

interface BookADemoProps {
  className?: string;
  header: Header;
  testimonials?: Testimonial[];
  footer?: Footer;
}

const BookADemo = ({
  header = {
    heading: "Schedule a demo",
    description: {
      text: "Book a demo to explore our development platform and discover how it can accelerate your team's productivity. If you have technical questions, feel free to reach out to our team.",
      hyperlink: "reach out to our team",
      url: "#",
    },
    avatars: [
      {
        image: "/images/avatars/demo-advisor.webp",
        avatarClassName: "border-orange-500",
        cursorClassName: "text-orange-500 fill-orange-500",
      },
      {
        image: "/images/avatars/demo-advisor.webp",
        avatarClassName: "border-blue-500",
        cursorClassName: "text-blue-500 fill-blue-500",
      },
    ],
  },
  testimonials = demoTestimonials,
  footer,
  className,
}: BookADemoProps) => {
  return (
    <section className={cn("section-padding relative overflow-hidden", className)}>
      <FluxDotGrid
        spacing={18}
        className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_60%,black,transparent)] opacity-[0.03] dark:opacity-[0.04]"
      />
      <div className="relative z-10 container">
        <div className="flex justify-center">
          <BookADemoHeader {...header} />
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 rounded-2xl md:rounded-3xl border border-border/70 overflow-hidden shadow-sm lg:grid-cols-2">
          <BookADemoContactForm />
          <BookADemoTestimonials testimonials={testimonials} />
        </div>
        {footer ? (
          <div className="mt-14">
            <BookADemoFooter {...footer} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BookADemo;
