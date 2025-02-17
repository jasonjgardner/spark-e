import { CONTROL_IMAGES } from "@/lib/constants";
import Image from "next/image";

export default function PromptControls() {
  return (
    <fieldset className="prompt-controls">
      <label
        htmlFor="steps"
        className="ml-2 cursor-pointer text-sm font-medium uppercase leading-none tracking-wide text-neutral-50 md:ml-4"
        title="Condition Scale"
      >
        Logo Influence
      </label>
      <input
        className="flex-1 text-black accent-white"
        type="range"
        id="steps"
        name="condition_scale"
        min={0.5}
        max={0.9}
        step={0.01}
        defaultValue={0.666}
      />

      <div className="btn-group ml-auto">
        <label htmlFor="variant" className="btn">
          Inside
          <input type="radio" name="variant" value="inside" defaultChecked />
          <Image
            className="btn-image"
            src={CONTROL_IMAGES.inside}
            alt="Inside"
            width={24}
            height={24}
            quality={10}
            priority
          />
        </label>

        <label htmlFor="variant" className="btn">
          Outside
          <input type="radio" name="variant" value="outside" />
          <Image
            className="btn-image"
            src={CONTROL_IMAGES.outside}
            alt="Outside"
            width={24}
            height={24}
            quality={10}
            priority
          />
        </label>

        <label htmlFor="variant" className="btn">
          Edge
          <input type="radio" name="variant" id="edge" value="edges" />
          <Image
            className="btn-image"
            src={CONTROL_IMAGES.edges}
            alt="Edge"
            width={24}
            height={24}
            quality={10}
            priority
          />
        </label>
      </div>
    </fieldset>
  );
}
