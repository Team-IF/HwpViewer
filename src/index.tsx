import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
