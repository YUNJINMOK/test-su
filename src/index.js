import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./router/MainPage";
import Home from "./router/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Notfound from "./router/Notfound";
import IntroSumok from "./router/IntroSumok";
import StampPage from "./router/StampPage";
import MyPage from "./router/MyPage";
import IndoorInfo from "./router/IndoorInfo";

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
      {
        path: "/introsumok",
        element: <IntroSumok />,
      },
      {
        path: "/stamp",
        element: <StampPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/indoorinfo",
        element: <IndoorInfo />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
