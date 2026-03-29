"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@workspace/ui/components/button"
import {
  IconChecklist,
  IconPaywall,
  IconSubtask,
  IconSubtitlesEdit,
  IconTrain,
  IconUserSearch,
} from "@workspace/ui/icons"
import { SectionHeading, SubHeading } from "@/components/typographys"
import Section from "@/components/Section"
import { Badge } from "@workspace/ui/components/badge"

interface IProcessProps {
  className?: string
}

const process = [
  {
    icon: IconSubtask,
    step: "01",
    title: "Get Assigned tasks",
    description:
      "Review incoming briefs and accept tasks that match your legal specialization",
    tags: ["Contract Review", "Due Diligence", "Legal Research"],
  },
  {
    icon: IconChecklist,
    step: "02",
    title: "Complete work",
    description:
      "Use our integrated platform to execute the task efficiently with AI assistance.",
    tags: ["Document Drafting", "Case Analysis", "Compliance Check"],
  },
  {
    icon: IconPaywall,
    step: "03",
    title: "Get paid Securely",
    description:
      "Receive automatic disbursement as soon as the client approves the deliverable",
    tags: ["Instant Settlement", "Transparent Billing", "Secure Payments"],
  },
]

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#004DE5"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#004DE5"
        strokeWidth="4"
      />
    </svg>
  )
}

const Process = ({ className }: IProcessProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) {
          setIsInView(entry.isIntersecting)
        }
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Section ref={ref} id="how">
      <div
        ref={containerRef}
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>How it works for lawyers</SectionHeading>
          <SubHeading>
            A seamless process designed for modern legal operations. We've
            combined AI-driven intake with human expertise to make legal work
            faster, more transparent, and entirely digital.
          </SubHeading>
        </div>
        <ul className="relative col-span-4 w-full lg:pl-22">
          {process.map((step, index) => (
            <li
              key={index}
              style={{
                transitionDelay: `${index * 300}ms`,
              }}
              data-inview={isInView}
              className="relative flex translate-y-12 transform flex-col justify-start gap-6 border-t py-8 opacity-0 transition-all duration-500 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100 md:flex-row lg:py-10"
            >
              <Illustration className="absolute top-4 right-0" />
              <Button size="icon-lg" className="size-12">
                <step.icon className="size-6" />
              </Button>
              <div className="">
                <Badge variant="outline" className="uppercase">
                  Step {step.step}
                </Badge>
                <h3 className="mb-4 text-xl font-semibold tracking-tighter lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mb-4 text-foreground/50">{step.description}</p>

                <div className="flex flex-wrap gap-1">
                  {step.tags.map((tag) => (
                    <Badge variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Process
