import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { MenuContextProvider } from "./hooks/menu_context";
import { ThemeProvider } from "styled-components";

import theme from "./components/styles/theme";
import GlobalStyle from "./components/styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MenuContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MenuContextProvider>
  </React.StrictMode>
);
