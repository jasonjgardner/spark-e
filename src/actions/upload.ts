"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { controlnetImageGeneration } from "../lib/ai";

const createFileName = (prompt: string, ext: string) => {
  const date = new Date();
  const timestamp = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

  return `${prompt.replace(/\s/g, "_")}-${timestamp}.${ext}`;
};

export async function uploadImage(formData: FormData) {
  const prompt = formData.get("prompt") as string;
  const fileName = createFileName(prompt, "png");

  try {
    const img = await controlnetImageGeneration({ prompt });

    if (!img) {
      throw new Error("Image generation failed");
    }

    const blob = await put(
      fileName,
      Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), "base64"),
      {
        access: "public",
      }
    );

    revalidatePath("/");
    return { url: blob.url };
  } catch (error) {
    console.error(error);
    throw new Error("Image upload failed");
  }
}
