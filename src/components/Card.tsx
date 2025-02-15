import Image, { type StaticImageData } from "next/image";
import clsx from "classix";
import { platypi } from "@/lib/fonts";
import blurSrc from "@/assets/blur.jpg";

export default function Card({
  src,
  caption,
  expanded = false,
}: {
  src: string | StaticImageData;
  caption: string;
  expanded?: boolean;
}) {
  return (
    <figure
      className={clsx(
        `group relative aspect-square overflow-clip rounded border border-neutral-800/50 contain-paint md:rounded-xl`,
        expanded && "sm:col-span-2 sm:row-span-2"
      )}
    >
      <Image
        className="transition-transform duration-300 group-hover:scale-150"
        src={src}
        alt={caption}
        loading={expanded ? "eager" : "lazy"}
        width={1024}
        height={1024}
        placeholder="blur"
        blurDataURL={blurSrc.blurDataURL}
        quality={expanded ? 95 : 75}
      />
      <figcaption
        className={clsx(
          platypi.className,
          "absolute inset-0 grid bg-black/50 p-4 text-white/90 opacity-0 bg-blend-screen ring ring-inset backdrop-blur-2xl backdrop-brightness-75 transition-opacity duration-300 ease-in-out md:rounded-xl md:group-hover:opacity-100"
        )}
      >
        <p className="m-auto select-none truncate text-balance font-thin md:text-xl">
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}
