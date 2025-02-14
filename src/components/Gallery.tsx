import type { StaticImageData } from "next/image";
import Card from "./Card";
export interface GalleryProps {
  title: string;
  images: {
    url: string | StaticImageData;
    prompt: string;
    expanded?: boolean;
  }[];
}
export default function Gallery({ images, title }: GalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <div className="col-span-5 mx-auto flex flex-col py-6">
      <h4 className="mt-4 select-none px-4 text-sm font-semibold uppercase tracking-widest text-neutral-200 xl:text-lg">
        {title}
      </h4>
      <div className="grid w-full grid-cols-1 gap-2 p-4 sm:grid-cols-3 md:grid-cols-5">
        {images.map((image, index) => (
          <Card
            key={index}
            src={image.url}
            caption={image.prompt}
            expanded={image.expanded}
          />
        ))}
      </div>
    </div>
  );
}
