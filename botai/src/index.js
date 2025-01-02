import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root")); // Updated for React 18

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
