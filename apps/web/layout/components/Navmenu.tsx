"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface INaveMenuProps {
  menuItems: Array<TMenuItem>
}

export const NavMenu = ({ menuItems }: INaveMenuProps) => {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.text}>
            <NavigationMenuLink
              data-active={pathname === item.path}
              render={<Link href={item.path} />}
              className={navigationMenuTriggerStyle()}
            >
              {item.text}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
