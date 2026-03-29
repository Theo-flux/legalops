"use client"
import { useEffect, useRef, useState } from "react"
import {
  IconBadge,
  IconBolt,
  IconCash,
  IconMeteor,
  IconStairs,
  IconTrendingUp,
  IconUserSearch,
} from "@workspace/ui/icons"
import { SectionHeading, SubHeading } from "@/components/typographys"
import Section from "@/components/Section"

export const benefits = [
  {
    title: "Consistent work",
    description:
      "Regular flow of high-quality tailored legal tasks tailored to your expertise and availability.",
    icon: IconMeteor,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "No client sourcing",
    description:
      "Eliminate marketing costs and time spent on business development and lead qualification.",
    icon: IconUserSearch,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Structured workflow",
    description:
      "Standardized processes and AI-powered tools to maximize your billable efficiency.",
    icon: IconStairs,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Fast payments",
    description:
      "Guaranteed, timely payments for every completed task without invoicing friction.",
    icon: IconCash,
    bg: "bg-green-100",
    color: "text-green-600",
  },
]

const Benefits = () => {
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
    <Section ref={ref} id="join" className="bg-gray-50">
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>Why join LegalOps?</SectionHeading>
          <SubHeading>
            We handle the business side so you can focus on legal excellence.
            Maximize your billable hours without administrative overhead.
          </SubHeading>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                data-inview={isInView}
                className="translate-y-12 transform rounded-xl border border-gray-200 bg-white p-8 text-center opacity-0 transition-all duration-500 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100"
              >
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${benefit.bg}`}
                >
                  <Icon className={`h-8 w-8 ${benefit.color}`} />
                </div>

                <h3 className="mb-3 font-semibold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
