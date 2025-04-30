
const config = 'VITEST' in process.env ? {
  plugins: []
} : {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
  ]
};

export default config;
