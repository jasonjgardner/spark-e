export default function PromptControls() {
  return (
    <fieldset className="prompt-controls">
      <label
        htmlFor="steps"
        className="ml-4 cursor-pointer text-sm uppercase leading-none tracking-wide text-neutral-50"
        title="Condition Scale"
      >
        Logo Weight
      </label>
      <input
        className="text-black accent-white"
        type="range"
        id="steps"
        name="condition_scale"
        min={0.5}
        max={1}
        step={0.01}
        defaultValue={0.666}
      />

      <div className="btn-group">
        <label htmlFor="variant" className="btn">
          Inside
          <input type="radio" name="variant" value="inside" defaultChecked />
        </label>

        <label htmlFor="variant" className="btn">
          Outside
          <input type="radio" name="variant" value="outside" />
        </label>

        <label htmlFor="variant" className="btn">
          Edge
          <input type="radio" name="variant" id="edge" value="edges" />
        </label>
      </div>
    </fieldset>
  );
}
