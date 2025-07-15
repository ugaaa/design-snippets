/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "var(--color-yellow)",
        pink: "var(--color-pink)",
        blue: "var(--color-blue)",
        green: "var(--color-green)",
        orange: "var(--color-orange)",
        lightgray: "var(--color-lightgray)",
      },
      fontSize: {
        base: "13px",
        "base-lg": "16px",
        tagline: "clamp(12px, 3.125vw, 36px)",
      },
      spacing: {
        "header-sm": "60px",
        "header-lg": "100px",
        "spacing-x": "30px",
        15: "60px",
      },
      height: {
        "header-sm": "60px",
        "header-lg": "100px",
      },
      transitionDuration: {
        hover: "0.5s",
      },
      keyframes: {
        showDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fallBounce: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          "20%, 50%, 80%, 100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-20px)",
          },
          "60%": {
            transform: "translateY(-10px)",
          },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "var(--color-blue)" },
        },
      },
      animation: {
        "show-down": "showDown 0.5s 5s forwards",
        "fall-bounce": "fallBounce 1s forwards",
        "typing-with-caret":
          "typing 2s steps(27, end) 0.5s forwards, blinkCaret 0.75s step-end 0.5s infinite",
      },
    },
  },
  plugins: [],
};
