import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// as Element:型アサーション（推論） createRootにNullとなりえる値を渡せないため。
ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
