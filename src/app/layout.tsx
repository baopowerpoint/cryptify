import type { Metadata } from "next";
import { JetBrains_Mono, Raleway } from "next/font/google";
import "./globals.css";

const jbSans = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const ralewaySans = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cryptify",
  description: "A simple encryption tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jbSans.variable} ${ralewaySans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
