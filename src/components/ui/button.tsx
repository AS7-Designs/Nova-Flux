import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold tracking-normal whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-none border border-transparent",
        outline: "border-border/80 bg-background text-foreground hover:bg-accent hover:text-foreground shadow-none",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-none",
        ghost: "hover:bg-accent hover:text-accent-foreground shadow-none",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 shadow-none",
        link: "text-primary underline-offset-4 hover:underline",
        light: "bg-white text-neutral-900 hover:bg-white/90 shadow-none",
      },
      size: {
        default: "h-10 px-5 text-sm font-semibold gap-2 rounded-full",
        xs: "h-7 px-3 text-xs font-medium gap-1.5 rounded-full",
        sm: "h-9 px-4 text-xs font-medium gap-2 rounded-full",
        lg: "h-11 md:h-12 px-6 md:px-7 text-sm md:text-base font-semibold gap-2.5 rounded-full",
        icon: "size-10 rounded-full",
        "icon-xs": "size-7 rounded-full",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
