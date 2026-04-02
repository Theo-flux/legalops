"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@workspace/ui/components/button"
import {
  IconCheckbox,
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
    icon: IconSubtitlesEdit,
    step: "01",
    title: "Submit your request",
    description:
      "Tell us about your legal needs via our secure, AI-assisted intake form. Our system analyzes your requirements to ensure we have all the context needed to move forward.",
    tags: ["Encrypted with industry-standard 256-bit AES protection."],
  },
  {
    icon: IconUserSearch,
    step: "02",
    title: "Get matched with a verified lawyer",
    description:
      "Our concierge team manually reviews your request and pairs you with a vetted specialist from our elite network. We only work with top 5% legal talent.",
    tags: ["Intellectual Property", "Corporate Law", "Employment"],
  },
  {
    icon: IconTrain,
    step: "03",
    title: "Track progress in real-time",
    description:
      "No more black holes. Monitor every milestone, chat directly with your lawyer, and manage versions through your dedicated, intuitive dashboard.",
    tags: ["Live dashboard preview"],
  },
  {
    icon: IconCheckbox,
    step: "04",
    title: "Receive your completed documents",
    description:
      "Download your finalized, legally-binding documents securely. All files are archived for easy access whenever you need them in the future.",
    tags: ["PDF & docx", "Full version History"],
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
    <Section ref={ref}>
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>Our Process</SectionHeading>
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
              className="relative flex translate-y-12 transform flex-col justify-between gap-10 border-t py-8 opacity-0 transition-all duration-500 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100 md:flex-row lg:py-10"
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
