import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./router/MainPage";
import Home from "./router/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: "",
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
