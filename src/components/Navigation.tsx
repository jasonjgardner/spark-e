import Menu from "@/components/Menu";
import Link from "next/link";
import Logo from "@/components/Logo";
import { LOGO_SIZE } from "@/lib/constants";
export default function Navigation() {
  return (
    <nav className="sticky inset-0 z-30 grid grid-flow-col grid-cols-3 items-center border-b border-neutral-800/90 bg-neutral-900/75 p-4 text-white shadow-md backdrop-blur-lg">
      <div className="fill-white px-2 sm:col-span-1">
        <Logo svgPath="/spark.svg" size={LOGO_SIZE} className="flex-shrink-0" />
      </div>
      <h1 className="select-none text-xl font-semibold tracking-wider underline-offset-4 hover:underline sm:col-span-1 lg:text-center xl:text-2xl">
        <Link href="/">SPARK·E</Link>
      </h1>

      <div className="col-span-1 flex place-content-end items-center justify-end space-x-4 px-2">
        <Menu />
      </div>
    </nav>
  );
}
