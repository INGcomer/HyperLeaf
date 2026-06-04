import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // HyperLeaf brand palette
        green: {
          institutional: "#4A5E23", // Pantone 371C — primary
          lime: "#C8D400",          // Pantone 382C — secondary accent
          mint: "#A8C66C",          // Pantone 365C — tertiary soft
        },
        brand: {
          black: "#3D3935",         // Pantone Black 7
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Source Sans Variable", "Source Sans Pro", "sans-serif"],
      },
      letterSpacing: {
        institutional: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
