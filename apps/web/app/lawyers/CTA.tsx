"use client"
import { Button } from "@workspace/ui/components/button"
import { SectionHeading, SubHeading } from "@/components/typographys"
import Link from "next/link"
import { IconArrowUpRight } from "@workspace/ui/icons"

const CTA = () => {
  return (
    <section className="flex h-[80svh] items-center justify-center bg-muted px-4 py-20">
      <div className="z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-xl bg-black px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-center">
          <SectionHeading className="text-white">
            Ready to tranform your practice?
          </SectionHeading>
          <SubHeading className="text-white">
            Join hundreds of professionals who have already scaled their work
            through LegalOps.
          </SubHeading>
        </div>

        <div className="mx-auto w-full max-w-fit">
          <Link href="/">
            <Button size="cta" variant="secondary">
              Apply as a lawyer
              <IconArrowUpRight className="size-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
