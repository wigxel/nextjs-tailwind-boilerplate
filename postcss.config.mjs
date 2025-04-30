const config =
  "VITEST" in process.env
    ? {
        plugins: [],
      }
    : {
        plugins: ["postcss-import", "@tailwindcss/postcss", "autoprefixer"],
      };

export default config;
