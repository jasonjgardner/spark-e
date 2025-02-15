"use client";
import { useId, useState } from "react";
import cx from "classix";
import ExternalIcon from "./ArrowIcon";
import Image from "next/image";
import Link from "next/link";

export default function SubmissionForm({
  uploadImage,
}: {
  uploadImage: (formData: FormData) => Promise<{ url: string }>;
}) {
  const id = useId();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setImageUrl(null);
    setLoading(true);
    setError(null);
    try {
      const { url } = await uploadImage(formData);
      setImageUrl(url);
    } catch (err) {
      console.error(err);
      setError("An error occurred during the image upload.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:items-center sm:justify-center"
    >
      <div className="z-10 m-auto flex min-h-fit w-fit max-w-6xl flex-col items-stretch justify-stretch space-y-4 px-4 py-3">
        <div className="prompt-wrapper">
          <label
            className="flex cursor-pointer select-none items-center text-sm uppercase leading-none tracking-wide text-neutral-50 lg:text-lg"
            htmlFor={id}
          >
            <span className="pr-4 transition-colors duration-300 ease-out hover:text-orange-300">
              Prompt
            </span>{" "}
            <span className="blades h-4 w-full flex-1"></span>
          </label>

          <input
            id={id}
            name="prompt"
            type="text"
            placeholder="Describe a material, texture or style"
            className={cx(
              `field-sizing-content min-w-96 placeholder-shown:font-light placeholder-shown:text-center placeholder-shown:text-xl font-normal max-w-2xl resize-x bg-transparent p-4 text-white placeholder-white placeholder-opacity-70 outline-none transition-all duration-300 ease-in-out`
            )}
            required
            autoFocus
            size={30}
            maxLength={120}
            autoComplete="off"
            spellCheck="true"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="group z-10 mx-auto mt-16 flex items-center justify-start backdrop-blur-2xl"
        >
          <div className="ease flex items-center rounded-sm border-2 border-white px-4 py-2 text-lg font-semibold uppercase tracking-wider text-white transition-colors duration-300 group-hover:border-neutral-50 group-disabled:bg-white group-disabled:text-black">
            {loading ? "Generating..." : "Generate"}
            <ExternalIcon className="ml-2 h-4 w-4 translate-y-0.5 rotate-45 fill-white group-disabled:hidden" />
          </div>
        </button>
      </div>
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-sm bg-red-500 bg-opacity-90 p-4 text-white">
            {error}
          </div>
        </div>
      )}
      {imageUrl && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md bg-black/90 p-4 backdrop-blur-md">
            <Image
              src={imageUrl}
              alt="Generated image"
              className="size-96 cursor-pointer"
              width={1024}
              height={1024}
              onClick={() => {
                setImageUrl(null);
              }}
            />
            <Link href="/gallery" className="mt-4">
              <span className="underline">See it in the gallery</span> →
            </Link>
          </div>
        </div>
      )}
    </form>
  );
}
