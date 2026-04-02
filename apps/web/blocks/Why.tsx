"use client"
import { useEffect, useRef, useState } from "react"
import {
  IconBadge,
  IconBolt,
  IconCash,
  IconTrendingUp,
} from "@workspace/ui/icons"
import { SectionHeading, SubHeading } from "@/components/typographys"
import Section from "@/components/Section"

export const audiences = [
  {
    title: "Fast processing",
    description:
      "Cut through red tape with automated workflows and expert guidance.",
    icon: IconBolt,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Transparent pricing",
    description:
      "No hidden fees. Flat rates for every filing service we offer.",
    icon: IconCash,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Real-time tracking",
    description:
      "Always know exactly where your application stands in the process.",
    icon: IconTrendingUp,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Verified lawyers",
    description:
      "Access a network of vetted, top-tier legal professionals instantly.",
    icon: IconBadge,
    bg: "bg-green-100",
    color: "text-green-600",
  },
]

const Why = () => {
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
    <Section ref={ref} id="for-who" className="bg-gray-50">
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>Why founders choose us</SectionHeading>
          <SubHeading>Efficiency meets legal expertise.</SubHeading>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon

            return (
              <div
                key={audience.title}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                data-inview={isInView}
                className="translate-y-12 transform rounded-xl border border-gray-200 bg-white p-8 text-center opacity-0 transition-all duration-500 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100"
              >
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${audience.bg}`}
                >
                  <Icon className={`h-8 w-8 ${audience.color}`} />
                </div>

                <h3 className="mb-3 font-semibold text-gray-900">
                  {audience.title}
                </h3>

                <p className="text-gray-600">{audience.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Why
