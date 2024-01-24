import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout/Layout.tsx";
import { Error } from "./pages/Error/Error.tsx";
import { Contacts } from "./pages/Contacts/Contacts.tsx";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Examples } from "./pages/Examples/Examples.tsx";

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
