import GlobalStyles from "./styles/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ModeProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ModeProvider>
        <App />
      </ModeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
