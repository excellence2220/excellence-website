import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./context/loginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </BrowserRouter>
);
