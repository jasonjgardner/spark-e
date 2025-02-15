export const CONTROL_IMAGES: string[] = [
  "https://us395zvdmstimt4f.public.blob.vercel-storage.com/controlnet/canny-KRWEnrFeUH9S1aNv5cAqkGj3fce9lZ.png",
  "https://d26mkv3tdw1wgb.cloudfront.net/public-images/vml-canny.png",
];

export const MODEL_SRC =
  "lucataco/sdxl-controlnet:06d6fae3b75ab68a28cd2900afa6033166910dd09fd9751047043a5bbb4c184b";

export const WEBHOOK_HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NGROK_HOST;

export const LOGO_SIZE = 48;
