import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Layout/Home";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductLoder from "./Loders/cartProductLoder";
import CheckOut from "./components/CheckOut/CheckOut";
import AuthProvider from "./components/Context/AuthProvider/AuthProvider";
import Signup from "./components/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "Orders",
        element: <Orders></Orders>,
        loader: cartProductLoder,
      },
      {
        path: "Inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "Checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/signup",
        element:<Signup></Signup>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
