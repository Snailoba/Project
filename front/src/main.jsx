import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/girassol";
import "@fontsource/inika";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
