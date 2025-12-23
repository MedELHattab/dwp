import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "h-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 hover:bg-primary/90 active:scale-95",
        destructive:
          "bg-destructive text-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-destructive/90 active:scale-95",
        outline:
          "border-2 border-primary bg-background text-primary shadow-md hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:scale-105 hover:bg-secondary/80 active:scale-95",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5 has-[>svg]:px-5",
        sm: "h-9 rounded-full gap-1.5 px-4 has-[>svg]:px-3.5",
        lg: "h-12 rounded-full px-8 text-base has-[>svg]:px-6",
        icon: "size-11 rounded-full",
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
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
