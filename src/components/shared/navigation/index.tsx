import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <span className="font-jetbrains font-bold text-xl">Cryptify</span>
      </div>
      <nav></nav>
    </header>
  );
};

export default Header;
