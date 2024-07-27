const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
 content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", ...fontFamily.sans],
      },
      colors: {
        primary: "#00A75D",
        accent: "",
        _1: "#1D293F",
        _2: "#20E9BC",
        _3: "#F2C94C",
        _4: "#FF374F",
      },
    },
     backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
  },
  variants: {},
  plugins: [],
};
