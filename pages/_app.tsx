import React from "react";
import "../styles/tailwind.css";
import Theme from "../styles/Theme";
// @ts-ignore
import { ThemeProvider } from "@wigxel/react-components";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
