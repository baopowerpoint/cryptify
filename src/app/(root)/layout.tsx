import Header from "@/components/shared/navigation";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="mb-20">{children}</main>
    </div>
  );
};

export default RootLayout;
