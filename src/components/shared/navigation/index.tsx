import React from "react";
import Logo from "./logo";
import { MainNav } from "./main-nav";
import { navItems } from "@/constants";
import { MobileNav } from "./mobile-nav";

const Header = () => {
  return (
    <header className="flex h-16 items-center px-4">
      <Logo />
      <MainNav items={navItems} />
      <div className="ml-auto flex items-center space-x-4">
        <MobileNav items={navItems} />
      </div>
    </header>
  );
};

export default Header;
