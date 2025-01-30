"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItem } from "@/types";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-neutrals-1 border-none">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <nav className="flex flex-col space-y-4">
          {items.map((item) => (
            <div key={item.name}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <div className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </div>
                  {item.items && (
                    <div className="ml-4 flex flex-col space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href || "#"}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
