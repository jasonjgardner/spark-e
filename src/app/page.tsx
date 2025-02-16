"use server";
import { uploadImage } from "@/actions/upload";
import generateImage from "@/actions/generate";
import Gallery from "@/components/Gallery";
import SubmissionForm from "@/components/SubmissionForm";
import Lead from "@/components/Lead";
import images from "@/data/images";
import GenerativeArt from "@/components/GenerativeArt";

export default async function Home() {
  images.length = 14;

  return (
    <div className="grid grid-flow-row scroll-smooth sm:grid-cols-3 xl:grid-cols-5">
      <div className="relative col-span-5 h-[66vh] overflow-hidden contain-size">
        <div className="absolute inset-0 flex flex-col items-center justify-center justify-items-center">
          <SubmissionForm
            generateImage={generateImage}
            uploadImage={uploadImage}
          />
        </div>
        <GenerativeArt />
      </div>

      <div className="reverse-blades col-span-5 row-span-2 pt-10">
        <div className="grid sm:grid-cols-5 lg:grid-flow-col">
          <div className="flex flex-col place-content-center items-center justify-center justify-items-center pl-2 pt-6 sm:col-span-2">
            <Lead />
          </div>

          <div className="place-content-start items-start justify-items-start sm:col-span-3">
            <Gallery images={images} title="Curated Creations" />
          </div>
        </div>
      </div>
    </div>
  );
}
