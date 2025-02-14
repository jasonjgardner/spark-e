import type React from "react";

interface LogoProps {
  svgPath: string;
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ svgPath, size = 100, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 bg-blue-100"
        style={{
          maskImage: `url("${svgPath}")`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: `url("${svgPath}")`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      />
    </div>
  );
};

export default Logo;
