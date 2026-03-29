"use client"
import { Button } from "@workspace/ui/components/button"
import Logo from "../components/Logo"
import { menuItems } from "./data"
import { NavMenu } from "../components/Navmenu"
import { NavigationSheet } from "../components/Navsheet"
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
      className="fixed top-0 z-20 mx-auto h-16 w-full transform border-b bg-background/95 px-4 opacity-0 backdrop-blur-sm transition delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
    >
      <div className="mx-auto flex h-full w-full items-center justify-between">
        <Logo />
        <div className="hidden md:block">
          <NavMenu menuItems={menuItems} />
        </div>
        <div className="flex items-center gap-3">
          <Link href="#waitlist" className="hidden md:flex">
            <Button>
              Apply as a lawyer
              <IconArrowUpRight className="size-4" />
            </Button>
          </Link>

          <div className="flex md:hidden">
            <NavigationSheet menuItems={menuItems}>
              <Link href="/" className="w-full">
                <Button size="cta" className="w-full">
                  Apply as a lawyer
                  <IconArrowUpRight className="size-6" />
                </Button>
              </Link>
            </NavigationSheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
