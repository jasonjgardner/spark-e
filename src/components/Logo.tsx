"use client";
import type React from "react";
import { useCallback, useState } from "react";
import cx from "classix";

interface LogoProps {
  svgPath: string;
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ svgPath, size = 100, className = "" }) => {
  // Create an element that always rotates clockwise 90 degrees on hover. Do not let it appear to rotate counterclockwise.
  const [rotation, setRotation] = useState(0);

  const handleMouseOver = useCallback(() => {
    setRotation((prevRotation) => prevRotation + 90);
  }, []);

  return (
    <div
      className={cx(className, "group relative overflow-hidden")}
      style={{ width: size, height: size }}
      onMouseOver={handleMouseOver}
    >
      <div
        className={cx("absolute inset-0 bg-white transition-transform")}
        style={{
          maskImage: `url("${svgPath}")`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: `url("${svgPath}")`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};

export default Logo;
