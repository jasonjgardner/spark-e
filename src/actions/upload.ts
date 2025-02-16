"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

const createFileName = (prompt: string, ext: string) => {
  const date = new Date();
  const timestamp = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

  return `${prompt.replace(/\s+/g, "_")}-${timestamp}.${ext}`;
};

export async function uploadImage(formData: FormData): Promise<void> {
  const prompt = formData.get("prompt") as string;
  const img = formData.get("image") as string;
  const fileName = createFileName(prompt, "png");

  if (!img || !(img as string).startsWith("data:image")) {
    throw new Error("Image data is required");
  }

  try {
    await put(
      fileName,
      Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), "base64"),
      {
        access: "public",
      }
    );

    revalidatePath("/gallery");
  } catch (error) {
    console.error(error);
    throw new Error("Image upload failed");
  }
}
