import { list } from "@vercel/blob";
import Gallery, { type GalleryProps } from "@/components/Gallery";

export default async function GalleryPage() {
const { blobs } = await list();

    const images: GalleryProps["images"] = blobs.map((blob) => ({
        url: blob.url,
        prompt: blob.pathname,
    }));

  return (
    <div>
        <Gallery images={images} title="Community Creations" />
    </div>
  );
}
