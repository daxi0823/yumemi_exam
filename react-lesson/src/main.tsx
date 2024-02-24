import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// as Element:型アサーション（推論） createRootにNullとなりえる値を渡せないため。
ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
		<BrowserRouter basename="/">
	    <App />
		</BrowserRouter>
  </React.StrictMode>,
);
