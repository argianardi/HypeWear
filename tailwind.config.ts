import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        OffWhite: "#F1F5F9",
        CoolGray: "#292F3D",
        SlateGray: "#4A4A4A",
        AshGray: "#696969",
        Red: "#FF3B30",
        PureWhite: "#FFFFFF",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
