import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { MenuContextProvider } from "./hooks/menu_context";
import { SearchContextProvider } from "./hooks/search_context";

import theme from "./components/styles/theme";
import GlobalStyle from "./components/styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <MenuContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MenuContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
