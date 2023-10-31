import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "@/reportWebVitals";
import { UserProvider } from "@context/user.context";
import { ProductProvider } from "@context/products.context";
import { ToastContainer } from "react-toastify";
import App from "@/App";
import CartProvider from "@context/cart.context";
import theme from "@/theme";
import "@/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <CartProvider>
              <ToastContainer />
              <App />
            </CartProvider>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
