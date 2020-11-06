import React from "react";
import t from "prop-types";
import "../styles/tailwind.css";
import Theme from "../styles/Theme.js";
import { ThemeProvider } from "@wigxel/react-components";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: t.any,
  pageProps: t.object,
};
