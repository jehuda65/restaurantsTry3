import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arbutus: "Arbutus, serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
