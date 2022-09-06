import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";

import { BrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Banner />
    <App />
  </BrowserRouter>
);
