import type { Metadata } from "next";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import Link from "next/link";
import "./globals.css";

import { gantari } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "SPARK·E",
  description:
    "Create original, realistic images and art from a text description and apply it to the VML logo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${gantari.className} flex h-screen flex-col justify-stretch bg-neutral-900`}
      >
        <div className="flex flex-1 flex-col">
          <nav className="sticky inset-0 z-20 grid grid-flow-col grid-cols-3 items-center border-b border-neutral-800/90 bg-neutral-900/75 p-4 text-white shadow-md backdrop-blur-lg">
            <div className="col-span-1 fill-white">
              <Logo svgPath="/spark.svg" size={32} className="flex-shrink-0" />
            </div>
            <h1 className="col-span-1 select-none text-center text-xl font-semibold tracking-wider underline-offset-4 hover:underline xl:text-2xl">
              <Link href="/">SPARK·E</Link>
            </h1>

            <div className="col-span-1 flex place-content-end items-center justify-end space-x-4">
              <Link
                href="/gallery"
                className="font-semibold opacity-75 transition-opacity duration-200 ease-out hover:opacity-95"
              >
                Gallery
              </Link>
              <span className="select-none">∕</span>
              <Link
                href="/about"
                className="font-semibold opacity-75 transition-opacity duration-200 ease-out hover:opacity-95"
              >
                About
              </Link>
            </div>
          </nav>
          <a id="top" />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
