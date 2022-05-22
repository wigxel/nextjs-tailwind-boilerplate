module.exports = {
  mode: "jit",
  content: ["./components/**/*.(js|ts|tsx)", "./pages/**/*.(js|ts|tsx)"],
  theme: {
    extend: {
      colors: {
        primary: "#00A75D",
        accent: "",
        _1: "#1D293F",
        _2: "#20E9BC",
        _3: "#F2C94C",
        _4: "#FF374F",
      },
    },
  },
  variants: {},
  plugins: [],
};
