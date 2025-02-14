"use client";
import { useId, useState } from "react";
import cx from "classix";
import ExternalIcon from "./ArrowIcon";

export default function SubmissionForm({
  uploadImage,
}: {
  uploadImage: (formData: FormData) => Promise<{ url: string }>;
}) {
  const id = useId();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    setError(null);
    try {
      await uploadImage(formData);
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
        <div className="mx-auto flex w-full min-w-sm flex-grow flex-col rounded-md border-2 border-white/50 bg-black/20 p-6 drop-shadow-lg backdrop-blur-xl transition-colors focus-within:bg-blue-950/50 hover:bg-blue-900/50 hover:drop-shadow-2xl">
          <label
            className="flex items-center text-sm uppercase leading-none tracking-wide text-neutral-50 lg:text-lg"
            htmlFor={id}
          >
            <span className="pr-4">Prompt</span>{" "}
            <span className="blades h-4 w-full flex-1"></span>
          </label>

          <textarea
            id={id}
            name="prompt"
            placeholder="Describe a material, texture or style"
            className={cx(
              `w-full min-w-72 max-w-2xl resize-x bg-transparent p-4 text-white placeholder-white placeholder-opacity-70 outline-none transition-all duration-300 ease-in-out`
            )}
            required
            rows={3}
            autoFocus
          ></textarea>
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
    </form>
  );
}
