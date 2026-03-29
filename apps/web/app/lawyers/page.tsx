import ROUTES from "@/constants/routes"
import Navbar from "@/layout/lawyers/Navbar"
import { Metadata } from "next"
import Hero from "./Hero"
import Footer from "@/layout/components/Footer"
import Benefits from "./Benefits"
import CTA from "./CTA"
import Process from "./process"

export const metadata: Metadata = {
  title: ROUTES.LAWYERS.title,
  description: ROUTES.LAWYERS.description,
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}
