import { gantari, platypi } from "@/assets/fonts";
import cx from "classix";
export default function About() {
  return (
    <article className="container mx-auto mt-12 max-w-prose text-balance">
      <h1
        className={cx(
          gantari.className,
          "text-4xl font-bold uppercase tracking-wide"
        )}
      >
        About <em>SPARK·E</em>
      </h1>

      <div className={cx(platypi.className, "mt-4 text-2xl text-gray-300")}>
        <p className="text-3xl tracking-wide leading-tight">
          <em>SPARK·E</em> is a project created in VML&rsquo;s KC office in
          preparation for the Vercel + WPP v0.dev Hackathon.
        </p>
      </div>
    </article>
  );
}
