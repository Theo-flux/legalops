"use client"
import { Button } from "@workspace/ui/components/button"
import Logo from "../components/Logo"
import { NavMenu } from "./Navmenu"
import { NavigationSheet } from "./Navsheet"
import { IconArrowUpRight } from "@workspace/ui/icons"
import { useEffect, useEffectEvent, useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadedState = useEffectEvent(() => {
    setIsLoaded(true)
  })

  useEffect(() => {
    handleLoadedState()
  }, [])

  return (
    <nav
      data-loaded={isLoaded}
      className="fixed inset-x-4 top-0 z-20 mx-auto h-16 transform bg-background/95 opacity-0 backdrop-blur-sm transition delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
    >
      <div className="mx-auto flex h-full items-center justify-between px-6">
        <Logo />
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          <Link href="#waitlist" className="hidden md:flex">
            <Button>
              Get Started
              <IconArrowUpRight className="size-4" />
            </Button>
          </Link>

          <div className="flex md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
