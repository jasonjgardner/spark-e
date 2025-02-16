export type Variant = "inside" | "outside" | "edges";

export interface ControlNetFormData {
  prompt: string;
  variant: Variant;
  condition_scale: number;
  num_inference_steps: number;
}

export interface ControlnetImageGenerationProps {
  image: string;
  prompt: string;
  negative_prompt?: string;
  condition_scale?: number;
  num_inference_steps?: number;
  seed?: number;
}
