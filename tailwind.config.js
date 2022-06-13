module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1280px",
      "2xl": "1280px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#64cccf", // cyan
        primaryHover: "hsl(180, 66%, 49%)", // light cyan
        secondary: "hsl(257, 27%, 26%)", // dark violet
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
        warning: "hsl(0, 87%, 67%)", // red
        gray: "hsl(0, 0%, 75%)",
        stone: "#eef0f6",
      },
    },
  },
  plugins: [],
};
