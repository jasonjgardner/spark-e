import { list } from "@vercel/blob";
import Gallery, { type GalleryProps } from "@/components/Gallery";
import images from "@/data/images";

export default async function GalleryPage() {
  const { blobs } = await list();

  const blobImages: GalleryProps["images"] = blobs.map((blob) => ({
    url: blob.url,
    prompt: blob.pathname,
  }));

  const shuffled = images
    .sort(() => 0.5 - Math.random())
    .map((image) => ({
      ...image,
      expanded: false,
    }));
  const selected = shuffled.slice(0, 100);

  const allImages = [...blobImages, ...selected];

  return (
    <div>
      <Gallery images={allImages} title="All Creations" />
    </div>
  );
}
