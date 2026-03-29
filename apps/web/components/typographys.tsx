import React, { forwardRef } from "react"

export const SectionHeading = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <h2
      ref={ref}
      {...rest}
      className={`title text-4xl leading-[1.2] font-semibold tracking-tighter md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  )
})
SectionHeading.displayName = "SectionHeading"

export const SubHeading = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <p
      ref={ref}
      {...rest}
      className={`mx-auto mt-4 max-w-2xl leading-relaxed text-neutral-600 md:text-xl ${className}`}
    >
      {children}
    </p>
  )
})

SubHeading.displayName = "SubHeading"
