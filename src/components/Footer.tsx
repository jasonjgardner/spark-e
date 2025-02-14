import Link from "next/link";
import { gantari, platypi } from "@/lib/fonts";
import clsx from "classix";
import ChevronIcon from "./ChevronIcon";

export default function Footer() {
  return (
    <footer
      className={clsx(
        platypi.className,
        "group mt-auto flex flex-row items-center justify-center bg-neutral-950 p-4"
      )}
    >
      <div className="flex flex-col">
        <p
          className={clsx(
            gantari.className,
            "cursor-default px-2 text-xl font-light uppercase tracking-widest opacity-70 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          )}
        >
          <span className="tracking-wide text-neutral-100">Made in</span>{" "}
          <span className="tracking-wide text-neutral-100 transition-colors duration-300 ease-in-out group-hover:text-red-300">
            K
          </span>
          <span className="text-neutral-100 transition-colors duration-300 ease-in-out group-hover:text-yellow-300">
            C
          </span>
          <span className="translate-y-1 text-2xl opacity-0 transition-[opacity,transform] delay-75 duration-100 ease-in-out group-hover:-translate-y-1 group-hover:opacity-100">
            🛫
          </span>
        </p>
        <p className="px-2 text-xs font-thin text-neutral-100 opacity-60 transition-opacity delay-200 duration-300 ease-in-out group-hover:opacity-100">
          By{" "}
          <Link
            className="uppercase tracking-wide underline-offset-2 hover:text-blue-200 group-hover:underline"
            href="https://my.vml.com/profile/jg-2024-09-17_17-13-28-463"
            prefetch={false}
          >
            Jason Gardner
          </Link>
        </p>
      </div>
      <Link href="#top" className="ml-auto" prefetch={false}>
        <ChevronIcon className="size-9 -rotate-90 fill-neutral-100 opacity-50 transition-opacity delay-300 duration-300 ease-in-out group-hover:opacity-75" />
      </Link>
    </footer>
  );
}
