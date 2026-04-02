import { Metadata } from "next"
import Features from "@/blocks/Features"
import Hero from "@/blocks/Hero"
import ROUTES from "@/constants/routes"
import Process from "@/blocks/process"
import Why from "@/blocks/Why"
import CTA from "@/blocks/CTA"
import Navbar from "@/layout/landing/Navbar"
import Footer from "@/layout/components/Footer"

export const metadata: Metadata = {
  title: ROUTES.HOME.title,
  description: ROUTES.HOME.description,
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Why />
      <CTA />
      <Footer />
    </div>
  )
}
