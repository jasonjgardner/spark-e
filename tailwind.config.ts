import type { Config } from "tailwindcss";
// @ts-expect-error - Easing plugin is not typed
import easing from "tailwindcss-easing";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        app: 'calc(100vh - 48px)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [easing],
} satisfies Config;
