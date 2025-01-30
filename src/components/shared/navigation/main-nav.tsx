"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/types";

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.href ? (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={pathname === item.href}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            ) : (
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
            )}
            {item.items && (
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.items.map((subItem) => (
                    <li key={subItem.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={subItem.href || "#"}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {subItem.name}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
