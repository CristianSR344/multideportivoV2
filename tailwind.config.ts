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
      colors:{
        fondoRojo:"#B11F57",
        fondoRojoLight:"#fab3c2ff",
        fondoVerde:"#0CA358",
        fondoVerdeLight:"#c2fad1ff",
        fondoMorado:"#603276",
        fondoMoradoLight:"#f0d0feff",

        fondoRLight:"#fab3c2ff",

        fondoVLight:"#c2fad1ff",

        fondoMLight:"#f0d0feff",
      }
    },
  },
  plugins: [],
};
export default config;
