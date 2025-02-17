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
    <div className="relative flex h-app flex-col lg:flex-row">
      <div className="flex-shrink lg:w-1/2">
        <GenerativeArt pattern={ERROR_404_PATTERN} />
      </div>
      <aside className="blades flex h-1/2 flex-1 flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg font-light">
          The page you were looking for could not be found.
        </p>
        <Link href="/">Return home</Link>
      </aside>
    </div>
  );
}
