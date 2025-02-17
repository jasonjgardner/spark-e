import Link from "next/link";
import GenerativeArt, { type Pattern } from "@/components/GenerativeArt";

const ERROR_404_PATTERN: Pattern = {
  data: [
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      true,
      false,
      true,
      false,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
    ],
    [
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ],
    [
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ],
    [
      false,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      true,
      true,
      false,
    ],
    [
      false,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
    ],
    [
      false,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
    ],
    [
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      true,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  ],
  position: "center",
};

export default function NotFound() {
  return (
    <div className="relative flex h-app flex-col divide-x-2 divide-black lg:flex-row">
      <div
        className="flex-1 bg-black lg:w-1/2"
        style={
          {
            "--color-1": "hsl(from var(--orange) calc(h + 270) 50% 66%);",
            "--color-0": "var(--orange);",
            "--color-2": "hsl(from var(--orange) calc(h + 180) 50% 55%);",
            "--color-3": "hsl(from var(--orange) calc(h + 90) 50% 60%);",
          } as React.CSSProperties
        }
      >
        <GenerativeArt pattern={ERROR_404_PATTERN} />
      </div>
      <aside className="blades grid h-1/2 flex-1 place-content-center">
        <h1 className="text-xl font-bold uppercase tracking-widest">
          Page not found
        </h1>
        <nav className="flex flex-col space-y-4 text-lg">
          <Link href="/" className="-ml-6">
            ← <span className="underline underline-offset-2">Return home</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
}
