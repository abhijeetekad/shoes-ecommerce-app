import "./App.css";
import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { Product } from "./Pages/Product/Product";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
