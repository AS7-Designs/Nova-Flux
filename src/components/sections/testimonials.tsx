import { Eyebrow } from "@/components/elements/eyebrow";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { homepageTestimonials } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface TestimonialsProps {
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
  className?: string;
  containerClass?: string;
}

export default function Testimonials({
  heading = "What our customers say",
  description = "Thousands of teams rely on Flux every day. Here is what they have to say about the experience.",
  testimonials = homepageTestimonials,
  className,
  containerClass,
}: TestimonialsProps) {
  return (
    <section className={cn("section-padding relative overflow-hidden", className)}>
      <div className={cn("relative z-10 container", containerClass)}>
        <div className="mx-auto mb-8 max-w-3xl space-y-3 lg:mb-12 lg:space-y-4 lg:text-center">
          <Eyebrow className="justify-center">Testimonials</Eyebrow>
          <h2 className="text-4xl tracking-tight lg:text-5xl">{heading}</h2>
          {description ? (
            <p className="text-muted-foreground text-lg leading-snug lg:text-balance">{description}</p>
          ) : null}
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 lg:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-[45%] lg:basis-1/3 lg:pl-6">
                  <div className="bg-card border-border flex h-full flex-col overflow-hidden rounded-md border shadow-none">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="size-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                      <span
                        aria-hidden
                        className="text-foreground/[0.06] font-display -mt-2 -mb-4 text-4xl leading-none select-none"
                      >
                        &ldquo;
                      </span>
                      <blockquote className="flex-1 text-base leading-snug font-medium lg:text-lg">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <div className="text-sm font-semibold">{testimonial.author}</div>
                        <div className="text-muted-foreground text-sm">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static size-10 translate-x-0 translate-y-0 rounded-full [&>svg]:size-4" />
              <CarouselNext className="static size-10 translate-x-0 translate-y-0 rounded-full [&>svg]:size-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
