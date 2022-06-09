module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "hsl(180, 66%, 49%)", // cyan
        primaryHover: "#9be3e2", // light cyan
        secondary: "hsl(257, 27%, 26%)", // dark violet
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
        warning: "hsl(0, 87%, 67%)", // red
        gray: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
