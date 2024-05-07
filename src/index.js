import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./router/MainPage";
import Home from "./router/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Notfound from "./router/Notfound";
import IntroSumok from "./router/IntroSumok";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Notfound />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {path: "/introsumok",
    element: <IntroSumok/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
