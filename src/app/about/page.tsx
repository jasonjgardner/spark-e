import type { Metadata } from "next";
import { gantari, platypi } from "@/assets/fonts";
import GenerativeArt from "@/components/GenerativeArt";
import dynamic from "next/dynamic";
import cx from "classix";

const AboutAccordion = dynamic(() => import("@/components/AboutAccordion"));

export const metadata: Metadata = {
  title: "About",
  description:
    "Who, what, why and how SPARK·E was created. A project by VML in preparation for the Vercel + WPP v0.dev Hackathon.",
};

export default function About() {
  return (
    <div className="grid h-app divide-y-2 divide-neutral-950 overflow-hidden contain-size md:grid-cols-4 md:divide-x-2">
      <article className="container col-span-2 mx-auto min-h-fit max-w-prose overflow-y-auto text-balance px-6 pt-12">
        <h1
          className={cx(
            gantari.className,
            "mt-6 text-xl font-bold uppercase tracking-wide"
          )}
        >
          About <em>SPARK·E</em>
        </h1>

        <div
          className={cx(
            platypi.className,
            "mt-4 cursor-default text-2xl text-gray-300"
          )}
        >
          <p className="text-3xl leading-tight tracking-wide">
            <em>SPARK·E</em> is a project created in VML&rsquo;s KC office in
            preparation for the Vercel + WPP v0.dev Hackathon.
          </p>
        </div>

        <AboutAccordion />
      </article>
      <div
        className="-order-1 col-span-2 w-full flex-1 overflow-hidden bg-black contain-strict md:order-1 md:h-app"
        style={
          {
            "--color-0": "pink",
            "--color-1": "red",
            "--color-2": "lightcoral",
          } as React.CSSProperties
        }
      >
        <GenerativeArt />
      </div>
    </div>
  );
}
