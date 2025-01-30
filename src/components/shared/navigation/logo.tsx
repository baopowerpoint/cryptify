import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <span className="font-jetbrains font-bold text-xl">Cryptify</span>
    </div>
  );
};

export default Logo;
