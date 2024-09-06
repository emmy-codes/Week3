import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

const typeGuard = (maybeHTMLElement: HTMLElement | null): maybeHTMLElement is HTMLElement => {
return maybeHTMLElement != null
}

const root = document.getElementById('root');

if (!typeGuard(root)) throw new Error('No root element found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
