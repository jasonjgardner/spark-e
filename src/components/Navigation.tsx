import Menu from "@/components/Menu";
import Link from "next/link";
import Logo from "@/components/Logo";
import { LOGO_SIZE } from "@/lib/constants";
export default function Navigation() {
  return (
    <nav className="sticky inset-0 z-30 flex items-center border-b-2 border-neutral-500/50 bg-neutral-900/75 p-4 text-white shadow-md backdrop-blur-lg lg:grid lg:grid-cols-3 lg:px-0">
      <Logo
        svgPath="/spark.svg"
        size={LOGO_SIZE}
        className="flex-shrink-0 fill-white sm:mx-2 lg:ml-6"
      />
      <h1 className="ml-4 flex-1 select-none text-2xl font-semibold tracking-wider underline-offset-4 hover:underline lg:mx-auto lg:text-center">
        <Link href="/">SPARK·E</Link>
      </h1>

      <div className="ml-auto flex flex-shrink space-x-2 lg:space-x-4 lg:pr-6">
        <Menu />
      </div>
    </nav>
  );
}
