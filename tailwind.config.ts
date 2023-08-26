import type { Config } from "tailwindcss"
let plugin = require("tailwindcss/plugin")

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
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
      colors: {
        "gray-pearl": "#171A1D",
        "medium-orange": "#B99330",
      },
    },
  },
  plugins: [
    plugin(function ({
      matchVariant,
      theme,
    }: {
      matchVariant: any
      theme: any
    }) {
      matchVariant(
        "nth",
        (value: any) => {
          return `&:nth-child(${value})`
        },
        {
          values: {
            DEFAULT: "n", // Default value for `nth:`
            "2n": "2n", // `nth-2n:utility` will generate `:nth-child(2n)` CSS selector
            "3n": "3n",
            "4n": "4n",
            "5n": "5n",
            //... so on if you need
          },
        }
      )
    }),
  ],
}

export default config
