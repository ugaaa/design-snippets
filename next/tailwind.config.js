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
        "color-yellow": "#ffc107",
        "color-pink": "#e91e63",
        "color-blue": "#03a9f4",
        "color-green": "#4caf50",
        "color-orange": "#ff5722",
        "color-lightgray": "#fafafa",
        "color-black": "#000",
      },
      fontSize: {
        base: "13px",
        "base-lg": "16px",
      },
      borderRadius: {
        custom: "30px",
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
      maxWidth: {
        custom: "1280px",
      },
      transitionDuration: {
        hover: "0.5s",
      },
      borderWidth: {
        10: "10px",
      },
      gap: {
        15: "60px",
      },
      screens: {
        md: "780px",
      },
      keyframes: {
        showDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "show-down": "showDown 0.5s 5s forwards",
      },
    },
  },
  plugins: [],
};
