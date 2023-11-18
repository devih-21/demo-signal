import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signal from "./signal";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hook from "./hook";
import { App } from "./App";
import { Nav } from "./nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
  },
  {
    path: "/signal",
    element: <Signal />,
  },
  {
    path: "/hook",
    element: <Hook />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
