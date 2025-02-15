"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { controlnetImageGeneration } from "@/lib/ai";
import { CONTROL_IMAGES } from "@/lib/constants";

const createFileName = (prompt: string, ext: string) => {
  const date = new Date();
  const timestamp = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

  return `${prompt.replace(/\s+/g, "_")}-${timestamp}.${ext}`;
};

export async function uploadImage(formData: FormData) {
  const prompt = formData.get("prompt") as string;
  const fileName = createFileName(prompt, "png");

  const variant = Number(formData.get("variant")) || 0;

  try {
    const img = await controlnetImageGeneration({
      prompt,
      image: CONTROL_IMAGES[variant],
      condition_scale: Number(formData.get("condition_scale")) || 1,
      num_inference_steps: Number(formData.get("num_inference_steps")) || 50,
    });

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

    revalidatePath("/gallery");
    return { url: blob.url };
  } catch (error) {
    console.error(error);
    throw new Error("Image upload failed");
  }
}
