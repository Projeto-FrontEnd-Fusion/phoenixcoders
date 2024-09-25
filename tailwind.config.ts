import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontSize: {
        ParagraphLg: ["1.25rem", "2rem"], // 20px, 32px
        ParagraphMd: ["1.125rem", "1.8125rem"], // 18px, 29px
        ParagraphBase: ["1rem", "1.5rem"], // 16px, 24px
        ParagraphSm: ["0.875rem", "1.25rem"], // 14px, 20px

        Title: ["4.5rem", { lineHeight: "4.9375rem", fontWeight: "600" }], // 72px, 79px
        H1: [
          "2.5rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "0.125rem",
            fontWeight: "500"
          } // 40px, 60px, 2px
        ],
        H2: ["2.5rem", { lineHeight: "3.125rem", fontWeight: "500" }], // 40px, 50px
        H3: ["2rem", { lineHeight: "2.5rem", fontWeight: "500" }] // 32px, 40px
      },
      colors: {
        blue: {
          1: "#28EEED",
          2: "#394C67",
          3: "#022440",
          hf: "#2B3A4F",
          hover: "#23CFCE",
          pressed: "#1A9998"
        },
        neutral: {
          1: "#EEEEEE",
          hover: "#B8B8B8"
        },
        orange: {
          1: "#FED674"
        },
        semanticColor: {
          1: "#0BB07B",
          2: "#F03D3D"
        }
      },
      boxShadow: {
        cardDev: "0px 8px 48px 0px rgba(40, 238, 237, 0.25)",
        cardExp: "0px 4px 10px 0px rgba(40, 238, 237, 0.4)"
      }
    }
  },
  plugins: []
};
export default config;
