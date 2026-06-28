import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#040404",
        fg: "#f3f3f0",
        muted: "#9a9a96",
      },
    },
  },
  plugins: [],
}
export default config
