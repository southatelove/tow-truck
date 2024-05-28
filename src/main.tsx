import "./index.css";
import React from "react";

import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout/Layout.tsx";
import { Contacts, Examples, Menu, Error } from "./pages/index";

console.log("Разработчик", "https://github.com/southatelove");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/examples",
        element: <Examples />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
