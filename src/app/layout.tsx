import type { Metadata } from "next";
import { gantari } from "@/lib/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s /// SPARK·E",
    default: "SPARK·E",
  },
  description:
    "Create original, realistic images and art from a text description and apply it to the VML logo.",
  openGraph: {
    title: "SPARK·E",
    description:
      "Create original, realistic images and art from a text description and apply it to the VML logo.",
    type: "website",
    url: "https://vzero-hackathon.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${gantari.className} max-h-app flex flex-col justify-stretch bg-neutral-900`}
      >
        <div className="flex flex-1 flex-col">
          <Navigation />
          <a id="top" />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
