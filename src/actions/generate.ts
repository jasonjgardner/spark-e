"use server";
import { controlnetImageGeneration } from "@/lib/ai";
import { CONTROL_IMAGES } from "@/lib/constants";
import { Variant } from "@/types";

export default async function generateImage(
  formData: FormData
): Promise<{ url: string }> {
  const prompt = formData.get("prompt") as string;
  const variant: Variant = (formData.get("variant") as Variant) || "inside";

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

    return { url: img };
  } catch (error) {
    console.error(error);
    throw new Error("Image generation failed");
  }
}
