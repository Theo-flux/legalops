import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
import Link from "next/link"
import { menuItems } from "../components/data"
import { NavigationMenuRootProps } from "@workspace/ui/base-ui"

export const NavMenu = (props: NavigationMenuRootProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {menuItems.map((item) => (
        <NavigationMenuItem key={item.text}>
          <NavigationMenuLink>
            <Link href={item.path}>{item.text}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
)
