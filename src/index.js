import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={Router()} />
  </React.StrictMode>,
  document.getElementById("root")
);
