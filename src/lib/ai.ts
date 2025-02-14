import { createReplicate } from "@ai-sdk/replicate";
import { experimental_generateImage as generateImage } from "ai";
import { MODEL_SRC, CONTROL_IMAGE, WEBHOOK_HOST } from "./constants";

const replicate = createReplicate({
  apiToken: process.env.REPLICATE_API_TOKEN,
});

export interface IControlnetImageGenerationProps {
  prompt: string;
}
export async function controlnetImageGeneration({
  prompt,
}: IControlnetImageGenerationProps) {
  const { image, warnings } = await generateImage({
    model: replicate.image(MODEL_SRC, { maxImagesPerCall: 1 }),
    prompt,
    providerOptions: {
      replicate: {
        image: CONTROL_IMAGE,
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
