import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "104": "26rem", // 416px
        "112": "28rem", // 448px
        "120": "30rem", // 480px
        "128": "32rem", // 512px
        "136": "34rem", // 544px
        "144": "36rem", // 576px
        "152": "38rem", // 608px
      },
    },
  },
  plugins: [],
};
export default config;
