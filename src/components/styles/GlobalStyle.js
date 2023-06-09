import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Raleway", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f4f4f4;
  color: #646464;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  color: #aaaaaa;
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;
}
a:hover {
  color: #2ebaae !important;
}
`;

export default GlobalStyle;
