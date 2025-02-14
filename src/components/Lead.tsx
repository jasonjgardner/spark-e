"use server";
import { platypi } from "@/lib/fonts";
import clsx from "classix";

export default async function Lead() {
  return (
    <div
      className={clsx(
        platypi.className,
        "mb-auto ml-auto mt-6 px-4 py-6 text-neutral-300 lg:mt-12"
      )}
    >
      <p
        className="max-w-xl text-balance text-2xl font-thin sm:text-sm lg:text-lg xl:text-4xl xl:font-light leading-relaxed"
      >
        <em className="mr-1">
          <strong className="tracking-wider">SPARK·E</strong>
        </em>{" "}
        can create original, realistic images and art from a text description.
        It can combine concepts, attributes, and styles then apply them to the
        VML &ldquo;spark&rdquo; logo — and nothing else.
        
      </p>
      <p
        className="max-w-xl text-balance text-2xl font-thin sm:text-sm lg:text-lg xl:text-4xl xl:font-light leading-relaxed mt-4 lg:mt-8"
      >Only the VML logo.</p>
    </div>
  );
}
