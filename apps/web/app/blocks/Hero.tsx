"use client"
// import Image from 'next/image';
import { Badge } from "@workspace/ui/components/badge"
import { SectionHeading, SubHeading } from "@/components/typographys"
import { Button } from "@workspace/ui/components/button"
import { useEffect, useEffectEvent, useState } from "react"
import Link from "next/link"

const Hero = () => {
  const textOptions = [
    "Stress free",
    "Lawyer backed",
    "Zero paperwork",
    "Fully protected",
  ]

  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadedState = useEffectEvent(() => {
    setIsLoaded(true)
  })

  useEffect(() => {
    handleLoadedState()
  }, [])

  return (
    <div id="home" className="w-dvw pt-40">
      <section className="mx-auto flex h-4/5 w-[95vw] max-w-5xl flex-col items-center justify-center gap-6 text-center">
        <div className="w-full">
          <Badge
            data-loaded={isLoaded}
            className="translate-y-6 rounded-full border border-blue-300 bg-blue-100 text-primary opacity-0 transition-all delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            The Future of Legal operations
          </Badge>
          <SectionHeading
            data-loaded={isLoaded}
            className="translate-y-6 opacity-0 transition-all delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            Register your business and handle legal fillings
            <div className="relative flex h-15 w-full overflow-hidden text-primary italic sm:h-24">
              <ul className="flip4 w-full">
                {textOptions.map((text) => (
                  <li key={text} className="h-25 w-full">
                    {text}.
                  </li>
                ))}
              </ul>
            </div>
          </SectionHeading>
          <SubHeading
            data-loaded={isLoaded}
            className="translate-y-6 opacity-0 transition-all delay-500 duration-500 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            we connect you with verified lawyers and let you track everything in
            one place. Streamlined, transparent and built for modern founders.
          </SubHeading>
        </div>

        <div
          data-loaded={isLoaded}
          className="mx-auto flex w-full translate-y-6 flex-col gap-4 opacity-0 transition-all delay-700 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100 md:max-w-fit md:flex-row"
        >
          <Link href="#waitlist">
            <Button size="cta" className="w-full md:w-auto">
              Get started
            </Button>
          </Link>

          <Link href="#features">
            <Button size="cta" variant="outline" className="w-full md:w-auto">
              See how it works
            </Button>
          </Link>
        </div>
      </section>

      {/* <figure
        data-loaded={isLoaded}
        className="mx-auto mt-12 h-1/5 w-[90vw] max-w-5xl translate-y-6 opacity-0 transition-all duration-1000 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100 md:mt-24"
      >
        <Image
          src={HeroImage}
          alt="illustration of people"
          className="object-center"
          sizes="100vw"
        />
      </figure> */}
    </div>
  )
}

export default Hero
