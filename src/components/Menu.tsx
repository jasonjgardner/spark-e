"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classix";

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/gallery"
        className={cx(
          "transition-opacity duration-100 ease-in-cubic hover:opacity-95",
          pathname === "/gallery"
            ? "font-semibold opacity-100"
            : "font-medium opacity-75"
        )}
      >
        Gallery
      </Link>
      <span className="select-none">∕</span>
      <Link
        href="/about"
        className={cx(
          "transition-opacity duration-100 ease-in-cubic hover:opacity-95",
          pathname === "/about"
            ? "font-semibold opacity-100"
            : "font-medium opacity-75"
        )}
      >
        About
      </Link>
    </>
  );
}
