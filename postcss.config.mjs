import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

const config = ('VITEST' in process.env) ?
  {
    plugins: [
      autoprefixer,
      tailwindcss,
      postcssPresetEnv
    ]
  } : {
    plugins: [
      "postcss-preset-env",
      "tailwindcss",
      "autoprefixer",
    ]
  };

export default config;
