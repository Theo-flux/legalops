"use client"
import Image from "next/image"
import HeroImage from "@/app/assets/lawyer-hero-2.jpg"
import { Badge } from "@workspace/ui/components/badge"
import { SectionHeading, SubHeading } from "@/components/typographys"
import { Button } from "@workspace/ui/components/button"
import { useEffect, useEffectEvent, useState } from "react"
import Link from "next/link"
import { IconArrowUpRight } from "@workspace/ui/icons"

const Hero = () => {
  const textOptions = ["For all", "Instant", "Global", "Transparent"]

  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadedState = useEffectEvent(() => {
    setIsLoaded(true)
  })

  useEffect(() => {
    handleLoadedState()
  }, [])

  return (
    <div id="home" className="w-dvw bg-muted pt-40 pb-20">
      <section className="mx-auto flex w-[95vw] max-w-5xl flex-col items-center justify-center gap-6 text-center md:h-4/5">
        <div className="w-full">
          <Badge
            data-loaded={isLoaded}
            className="translate-y-6 rounded-full border border-blue-300 bg-blue-100 text-primary opacity-0 transition-all delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            The Future of Legal Operations
          </Badge>
          <SectionHeading
            data-loaded={isLoaded}
            className="translate-y-6 opacity-0 transition-all delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            Join our networks of
            <p className="text-primary italic">Verified lawyers</p>
          </SectionHeading>
          <SubHeading
            data-loaded={isLoaded}
            className="translate-y-6 opacity-0 transition-all delay-500 duration-500 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            Experience a professional, efficient way to scale your legal
            practice with high-quality B2B tasks.
          </SubHeading>
        </div>

        <div
          data-loaded={isLoaded}
          className="mx-auto flex w-full translate-y-6 flex-col gap-4 opacity-0 transition-all delay-700 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100 md:max-w-fit md:flex-row"
        >
          <Link href="/">
            <Button size="cta" className="w-full md:w-auto">
              Apply as a lawyer
              <IconArrowUpRight className="size-6" />
            </Button>
          </Link>

          <Link href="#features">
            <Button size="cta" variant="outline" className="w-full md:w-auto">
              See how it works
            </Button>
          </Link>
        </div>
      </section>

      <figure
        data-loaded={isLoaded}
        className="mx-auto mt-12 h-1/5 w-[90vw] max-w-5xl translate-y-6 overflow-clip rounded-2xl opacity-0 transition-all duration-1000 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100 md:mt-24"
      >
        <Image
          src={HeroImage}
          alt="illustration of people"
          className="object-center"
          sizes="100vw"
        />
      </figure>
    </div>
  )
}

export default Hero
