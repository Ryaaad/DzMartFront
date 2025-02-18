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
        'patterned': "url('/images/background-pattern.jpg')",
      },
      colors: {
        borderGray: '#F7F7F7',
        inputGray: '#F9F9F9',
        btnGray:'#747474',
        btnscnd:'#f8f9fa',
        scdOrang:"#ffc43f"
      },
      // bg_border
    },
  },
  plugins: [],
};
export default config;
