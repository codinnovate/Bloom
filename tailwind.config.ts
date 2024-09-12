import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll":'loop-scroll 50s linear infinite',
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        },
      },
      colors:{
        'purple':'#9747FF',
        'grey':'#101928',
        'pink':'#ffa9b4',
      }
    },
  },
  plugins: [],
};
export default config;
