import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Providers } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Providers>
        <App />
      </Providers>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
