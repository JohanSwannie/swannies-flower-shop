import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Signin from "./routes/signin/signin.component";
import Customer from "./routes/customer/customer.component";
import Checkout from "./routes/checkout/checkout.component";
import Administrator from "./routes/administrator/administrator.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth1" element={<Signin />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Administrator />} />
      </Routes>
    </div>
  );
}

export default App;
