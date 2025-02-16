import { Variant } from "@/types";

export const CONTROL_IMAGES: Record<Variant, string> = {
  outside:
    "https://us395zvdmstimt4f.public.blob.vercel-storage.com/controlnet/canny-KRWEnrFeUH9S1aNv5cAqkGj3fce9lZ.png",
  inside:
    "https://us395zvdmstimt4f.public.blob.vercel-storage.com/controlnet/canny-mask-JlJIAdZaBZAguihW28K1Fo2BZUMxlh.png",
  edges: "https://d26mkv3tdw1wgb.cloudfront.net/public-images/vml-canny.png",
};
export const PROFILE_LINK =
  "https://my.vml.com/profile/jg-2024-09-17_17-13-28-463";
export const MODEL_SRC =
  "lucataco/sdxl-controlnet:06d6fae3b75ab68a28cd2900afa6033166910dd09fd9751047043a5bbb4c184b";

export const WEBHOOK_HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NGROK_HOST;

export const LOGO_SIZE = 48;
