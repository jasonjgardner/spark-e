import { createReplicate } from "@ai-sdk/replicate";
import { experimental_generateImage as generateImage } from "ai";
import { MODEL_SRC, WEBHOOK_HOST } from "./constants";
import { ControlnetImageGenerationProps } from "@/types";

const replicate = createReplicate({
  apiToken: process.env.REPLICATE_API_TOKEN,
});

export async function controlnetImageGeneration({
  image: controlImage,
  prompt,
  negative_prompt = "low quality, bad quality, hands, faces, human, anatomy, ugly",
  condition_scale = 0.66,
  num_inference_steps: steps = 50,
  seed = undefined,
}: ControlnetImageGenerationProps): Promise<string> {
  const { image, warnings } = await generateImage({
    seed: seed ?? Number((Math.random() * 1000000).toFixed(0)),
    model: replicate.image(MODEL_SRC, { maxImagesPerCall: 1 }),
    prompt,
    providerOptions: {
      replicate: {
        image: controlImage,
        negative_prompt,
        condition_scale,
        num_inference_steps: Math.min(500, Math.max(1, steps)),
        webhook: `${WEBHOOK_HOST}/api/webhooks`,
        webhook_events_filter: ["start", "completed"],
      },
    },
  });

  if (warnings && warnings.length > 0) {
    console.warn("Warnings during image generation:", warnings);
  }

  return `data:image/png;base64,${image.base64}`;
}
