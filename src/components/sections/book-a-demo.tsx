"use client";

import { ArrowLeft, ArrowRight, MousePointer2 } from "lucide-react";
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
  return (
    <div className="bg-card border-b p-8 lg:border-r lg:border-b-0">
      <form className="grid grid-cols-2 gap-x-3 gap-y-6">
        <FormGroup className="col-span-2 sm:col-span-1">
          <Label>First Name</Label>
          <Input type="text" placeholder="Bruce" />
        </FormGroup>
        <FormGroup className="col-span-2 sm:col-span-1">
          <Label>Last Name</Label>
          <Input type="text" placeholder="Wayne" />
        </FormGroup>
        <FormGroup className="col-span-2">
          <Label>Email</Label>
          <Input type="email" placeholder="bruce@example.com" />
        </FormGroup>
        <FormGroup className="col-span-2 sm:col-span-1">
          <Label>Company size</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10</SelectItem>
              <SelectItem value="11-50">11-50</SelectItem>
              <SelectItem value="51-100">51-100</SelectItem>
              <SelectItem value="101-500">101-500</SelectItem>
              <SelectItem value="501-1000">501-1000</SelectItem>
            </SelectContent>
          </Select>
        </FormGroup>
        <FormGroup className="col-span-2 sm:col-span-1">
          <Label>Role</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CEO">CEO</SelectItem>
              <SelectItem value="CTO">CTO</SelectItem>
              <SelectItem value="CFO">CFO</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </FormGroup>
        <FormGroup className="col-span-2">
          <Label>Message</Label>
          <Textarea
            placeholder="Share more about your use case, product, tech stack and what you want to accomplish"
            className="min-h-32"
          />
        </FormGroup>
        <Button type="submit" className="col-span-2" size="lg">
          Continue <ArrowRight />
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="relative flex h-full p-8">
      <div className="absolute top-8 right-8 flex items-center gap-2">
        <Button
          size="sm"
          onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)}
        >
          <ArrowLeft />
        </Button>
        <Button size="sm" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}>
          <ArrowRight />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {testimonials.map((testimonial, index) => {
          if (index !== activeTestimonial) return null;

          return (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              key={`testimonial-${index}`}
              className="flex h-full flex-col justify-between gap-12"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.companyLogo}
                  alt={`${testimonial.author.name} company logo`}
                  className={cn("h-6 w-auto object-contain md:h-8", testimonial.companyLogoClassName ?? "dark:invert")}
                />
              </div>

              <div className="space-y-6">
                <blockquote className="text-muted-foreground leading-snug sm:text-lg lg:max-w-md">
                  &quot;
                  {testimonial.quote.fullQuote.split(" ").map((word, wordIndex) => {
                    const isHighlighted = testimonial.quote.highlightedWords.some((highlighted) =>
                      word.toLowerCase().includes(highlighted.toLowerCase()),
                    );
                    return (
                      <span key={wordIndex} className={isHighlighted ? "text-foreground font-medium" : ""}>
                        {word}{" "}
                      </span>
                    );
                  })}
                  &quot;
                </blockquote>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.author.profilePicture}
                    alt={testimonial.author.name}
                    className="size-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">{testimonial.author.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.author.designation}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
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
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 rounded-lg border lg:grid-cols-2">
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
