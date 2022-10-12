import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "black",
    accent: " #808080",
    lite: "#D3D3D3",
  },
  space: [0, 2, 4, 8, 16, 32, 64],
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
