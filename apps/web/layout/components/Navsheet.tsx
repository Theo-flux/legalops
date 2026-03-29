import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { IconMenu } from "@workspace/ui/icons"
import Logo from "./Logo"

export const NavigationSheet = ({
  menuItems,
  children,
}: {
  menuItems: Array<TMenuItem>
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon" className="rounded-full">
          <IconMenu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full p-4">
        <div className="flex w-full flex-col gap-12">
          <Logo />
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex w-full flex-col items-start gap-3">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.text}>
                  <NavigationMenuLink
                    data-active={pathname === item.path}
                    render={<Link href={item.path} />}
                    className={navigationMenuTriggerStyle()}
                  >
                    <SheetClose>{item.text}</SheetClose>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {children}
        </div>
      </SheetContent>
    </Sheet>
  )
}
