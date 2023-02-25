// @flow
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products-context/products-context.component";
import { CartProvider } from "./context/cart-context/cart-context.component";
import { CustProvider } from "./context/cust-context/cust-context.component";
import "./index.css";
import App from "./App";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <CustProvider>
            <App />
          </CustProvider>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
