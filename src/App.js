import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth1" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
