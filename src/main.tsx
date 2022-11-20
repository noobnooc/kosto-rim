import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { applyColorScheme } from "./theme";

applyColorScheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
