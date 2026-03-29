"use client"
import { Button } from "@workspace/ui/components/button"
import { SectionHeading, SubHeading } from "@/components/typographys"
import Link from "next/link"
import { IconArrowUpRight } from "@workspace/ui/icons"

const CTA = () => {
  return (
    <section className="h-[80svh] bg-primary py-20">
      <div className="z-10 mx-auto flex h-full w-full max-w-240 flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-center">
          <SectionHeading className="text-white">
            Start your registration today
          </SectionHeading>
          <SubHeading className="text-white">
            Join thousands of entrepreneurs who launched their business through
            LegalOps. Quick, reliable, and legally sound.
          </SubHeading>
        </div>

        <div className="mx-auto w-full max-w-fit">
          <Link href="/">
            <Button size="cta" variant="secondary">
              Start your request
              <IconArrowUpRight className="size-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
