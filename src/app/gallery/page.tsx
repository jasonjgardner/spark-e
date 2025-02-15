import type { Metadata } from "next";
import { list } from "@vercel/blob";
import Gallery, { type GalleryProps } from "@/components/Gallery";
import images from "@/data/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "SPARK·E GALLER∙E: A collection of the generated images created by users.",
};

export default async function GalleryPage() {
  const { blobs } = await list();

  const blobImages: GalleryProps["images"] = blobs
    .filter(({ pathname }) => !pathname.includes("/"))
    .map((blob) => ({
      url: blob.url,
      prompt: blob.pathname
        .split("_")
        .join(" ")
        .replace(/-2025-\d{0,2}-\d{0,2}.*$/, "")
        .trim(),
    }));

  const shuffled = images
    .sort(() => 0.5 - Math.random())
    .map((image) => ({
      ...image,
      expanded: false,
    }));
  const selected = shuffled.slice(0, 100); // TODO: Implement pagination

  const allImages = [...blobImages, ...selected];

  return (
    <div>
      <Gallery images={allImages} title="All Creations" />
    </div>
  );
}
