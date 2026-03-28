import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { IconMenu } from "@workspace/ui/icons"
import Logo from "../components/Logo"
import { NavMenu } from "./Navmenu"

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon" className="rounded-full">
          <IconMenu />
        </Button>
      </SheetTrigger>
      <SheetContent className="border p-4">
        <Logo />
        <NavMenu orientation="vertical" />
      </SheetContent>
    </Sheet>
  )
}
