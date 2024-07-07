import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        abril: ["Abril Fatface", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "open-menu-upper-line-forward": {
          "0%": {
            transform: "translateY(0%) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(200%) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(200%) rotate(45deg)",
          },
        },
        "open-menu-upper-line-backward": {
          "0%": {
            transform: "translateY(200%) rotate(45deg)",
          },
          "50%": {
            transform: "translateY(200%) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(0%) rotate(0deg)",
          },
        },
        "open-menu-lower-line-forward": {
          "0%": {
            transform: "translateY(0%) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-200%) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-200%) rotate(-45deg)",
          },
        },
        "open-menu-lower-line-backward": {
          "0%": {
            transform: "translateY(-200%) rotate(-45deg)",
          },
          "50%": {
            transform: "translateY(-200%) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(0%) rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
