"use client";
import { useId, useState } from "react";
import cx from "classix";
import ExternalIcon from "./ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import PromptControls from "./PromptControls";

interface SubmissionFormProps {
  generateImage: (formData: FormData) => Promise<{ url: string }>;
  uploadImage: (formData: FormData) => Promise<void>;
}

export default function SubmissionForm({
  generateImage,
  uploadImage,
}: SubmissionFormProps) {
  const id = useId();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [promptText, setPromptText] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handlePromptSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setImageUrl(null);
    setLoading(true);
    setError(null);

    setPromptText(formData.get("prompt") as string);

    try {
      const { url } = await generateImage(formData);
      setImageUrl(url);
    } catch (err) {
      console.error(err);
      setError("An error occurred during the image generation.");
    } finally {
      setLoading(false);
    }
  }

  async function handleImageUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("prompt", promptText as string);
    formData.set("image", imageUrl as string);
    setLoading(true);
    setSubmitted(false);
    setError(null);

    try {
      await uploadImage(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("An error occurred during the image upload.");
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  }

  function handleDownload() {
    const a = document.createElement("a");
    a.href = imageUrl as string;
    a.download =
      (promptText?.replace(/\s+/g, "_") ?? "generated-image") + ".png";
    a.click();
  }

  return (
    <>
      <form
        onSubmit={handlePromptSubmit}
        className="flex flex-col sm:items-center sm:justify-center"
      >
        <div className="z-10 m-auto flex min-h-fit w-fit max-w-6xl flex-col items-stretch justify-stretch space-y-4 px-4 py-3">
          <div className="prompt-wrapper">
            <label
              className="flex cursor-pointer select-none items-center text-sm uppercase leading-none tracking-wide text-neutral-50 lg:text-lg"
              htmlFor={id}
            >
              <span className="pr-4 transition-colors duration-300 ease-in-quad hover:text-orange-300">
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
                loading && "animate-pulse",
                `w-full min-w-96 max-w-2xl resize-x bg-transparent p-4 font-normal text-white placeholder-white placeholder-opacity-70 outline-none transition-all duration-300 ease-in-out-sine placeholder-shown:text-center placeholder-shown:text-xl placeholder-shown:font-light xl:min-w-[50rem] xl:max-w-4xl`
              )}
              required
              autoFocus
              size={30}
              minLength={5}
              maxLength={240}
              autoComplete="off"
              spellCheck="true"
              disabled={loading}
            />
          </div>

          <PromptControls />

          <button
            type="submit"
            disabled={loading}
            className="group z-10 mx-auto mt-16 flex items-center justify-start backdrop-blur-2xl"
          >
            <div className="ease flex items-center rounded-sm border-2 border-white px-4 py-2 text-lg font-semibold uppercase tracking-wider text-white transition-colors duration-300 group-hover:border-neutral-50 group-hover:bg-white/10 group-disabled:bg-white group-disabled:text-black">
              {loading ? "Generating..." : "Generate"}
              <ExternalIcon className="ml-2 size-4 translate-y-0.5 rotate-45 fill-white group-disabled:hidden" />
            </div>
          </button>
        </div>
      </form>

      {imageUrl && promptText && (
        <>
          <div className="absolute inset-0 z-10 bg-neutral-900/75 backdrop-blur-lg"></div>
          <form
            onSubmit={handleImageUpload}
            className="absolute inset-0 z-20 m-auto flex h-fit w-fit flex-col rounded-md border border-neutral-100 bg-neutral-50 p-4 shadow-2xl ring ring-neutral-800 sm:items-center sm:justify-center"
          >
            <div className="group relative">
              <Image
                src={imageUrl}
                alt="Generated image result"
                title={promptText}
                className="size-96 cursor-pointer rounded"
                width={1024}
                height={1024}
              />
              <button
                type="button"
                className="absolute inset-0 z-10 m-auto flex justify-center bg-gradient-to-t from-black/75 via-black/50 to-black/0 text-xl text-white opacity-0 transition-opacity duration-200 ease-in-sine group-hover:opacity-100"
                onClick={handleDownload}
              >
                <span className="mb-[10%] mt-auto p-4 underline">Download</span>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between divide-x divide-neutral-300">
              {submitted ? (
                <>
                  <button
                    type="button"
                    className="cursor-pointer text-black ml-0 mr-auto flex-shrink whitespace-nowrap pr-4"
                    onClick={() => {
                      setSubmitted(false);
                      setImageUrl(null);
                    }}
                  >
                   ← <span className="underline">Create another</span>
                  </button>
                  <Link href="/gallery" className="text-black flex-grow pl-4 ml-auto mr-0">
                    <span className="underline">Visit gallery</span> →
                  </Link>
                </>
              ) : loading ? (
                <span className="animate-pulse cursor-wait text-neutral-600">
                  Uploading image...
                </span>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center uppercase tracking-wide text-black underline-offset-4 transition-colors duration-300 ease-in-out-sine hover:underline"
                >
                  Submit to Gallery
                  <ExternalIcon className="ml-2 size-4" />
                </button>
              )}
            </div>
          </form>
        </>
      )}

      {error && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center"
          role="alert"
          onClick={() => setError(null)}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setError(null)}
          ></div>
          <div className="cursor-pointer rounded-xl border border-red-400 bg-red-500 bg-opacity-90 p-4 text-white ring-1 ring-red-900 drop-shadow-2xl backdrop-blur-lg">
            {error}
          </div>
        </div>
      )}
    </>
  );
}
