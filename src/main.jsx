import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouterProvider, router } from "react-router-dom"
import App from "./App.jsx";
import { CartProvider } from "./component/Content/CartContext.jsx";
import { AuthProvider } from "./component/Content/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
        {/* <RouterProvider router={router} /> */}
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
