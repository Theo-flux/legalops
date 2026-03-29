"use client"
import { useEffect, useRef, useState } from "react"
import {
  IconBuilding,
  IconShield,
  IconCheck,
  IconClockBolt,
  IconTrademark,
} from "@workspace/ui/icons"
import { SectionHeading, SubHeading } from "@/components/typographys"
import Section from "@/components/Section"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"

export const features = [
  {
    tag: "fast-tracked",
    title: "Company Registration",
    description:
      "Accelerated business incorporation designed for startups and established enterprises alike. We handle the bureaucracy so you can focus on building.",
    icon: IconBuilding,
    includes: [
      "CAC filing",
      "Articles of Association",
      "Shareholder certificates",
      "Tax ID generation.",
    ],
    timeline: "5-10 business days of processing",
    bg: "bg-blue-100",
    color: "text-blue-600",
    cta_text: "Start Registration",
    link: "/",
  },
  {
    tag: "Ip protection",
    title: "Trademark Registration",
    description:
      "Secure your intellectual property. Protect your brand identity, logos, and taglines from unauthorized use across multiple jurisdictions.",
    icon: IconTrademark,
    includes: [
      "Comprehensive name search",
      "filing report",
      "official journal publication",
      "monitoring.",
    ],
    timeline: "3-6 months for full certification depending on clas",
    bg: "bg-blue-100",
    color: "text-blue-600",
    cta_text: "Protect brand",
    link: "/",
  },
]

const Features = () => {
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
    <Section ref={ref} id="features" className="bg-muted">
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"
      >
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>What we offer you</SectionHeading>
          <SubHeading>
            Streamlined legal technology solutions designed to scale with your
            business growth and ensure full compliance.
          </SubHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                data-inview={isInView}
                className="flex translate-y-12 transform flex-col gap-8 rounded-xl border border-gray-200 bg-white p-8 opacity-0 transition-all duration-500 ease-out hover:shadow-lg data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100"
              >
                <div className="flex flex-col justify-start gap-2 md:flex-row md:items-center">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${feature.bg}`}
                  >
                    <Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <div>
                    <Badge className="uppercase">{feature.tag}</Badge>
                    <h3 className="text-xl font-semibold tracking-tighter lg:text-2xl">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600">{feature.description}</p>

                <div className="flex flex-col gap-2">
                  {feature.includes.map((item) => (
                    <div className="flex items-center justify-start gap-2">
                      <IconCheck className="size-4 text-primary" />

                      <p>{item}</p>
                    </div>
                  ))}
                  <div className="flex items-center justify-start gap-2">
                    <IconClockBolt className="size-5 text-primary" />
                    <p>{feature.timeline}</p>
                  </div>
                </div>

                <Button size="cta">
                  {feature.cta_text}
                  <Icon />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Features
