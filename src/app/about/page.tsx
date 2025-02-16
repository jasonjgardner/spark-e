import { gantari, platypi } from "@/assets/fonts";
import ExternalIcon from "@/components/ArrowIcon";
import GenerativeArt from "@/components/GenerativeArt";
import { PROFILE_LINK } from "@/lib/constants";
import cx from "classix";
import Link from "next/link";
export default function About() {
  return (
    <div className="grid h-app divide-y-2 divide-neutral-950 overflow-hidden contain-size md:grid-cols-4 md:divide-x-2">
      <article className="container col-span-2 mx-auto min-h-fit max-w-prose overflow-y-auto text-balance px-6 pt-12">
        <h1
          className={cx(
            gantari.className,
            "text-4xl font-bold uppercase tracking-wide"
          )}
        >
          About <em>SPARK·E</em>
        </h1>

        <div className={cx(platypi.className, "mt-4 text-2xl text-gray-300")}>
          <p className="text-3xl leading-tight tracking-wide">
            <em>SPARK·E</em> is a project created in VML&rsquo;s KC office in
            preparation for the Vercel + WPP v0.dev Hackathon.
          </p>
        </div>

        <details name="case-study" className="mt-16 cursor-default">
          <summary>Challenge</summary>
          <p className="pt-4 text-xl">
            The hackathon&rsquo;s challenge is to create a project which uses
            Vercel&rsquo;s AI SDK and v0 platform.
          </p>
          <p>
            This project was developed to explore the capabilities of the SDK
            and its integration with the platform, prior to the official project
            start.
          </p>
        </details>
        <details name="case-study" className="mt-8">
          <summary>Inspiration</summary>
          <p>
            I generated several examples of applying ControlNet in Stable
            Diffusion with the VML logo as the control input.
          </p>
        </details>
        <details name="case-study" className="mt-8">
          <summary>Idea</summary>
          <p className="text-xl">Make a VML-flavored version of DALL-E.</p>
        </details>
        <details name="case-study" className="mt-8">
          <summary>Execution</summary>
        </details>
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
