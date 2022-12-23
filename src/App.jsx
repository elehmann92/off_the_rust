import { useState } from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dash from "./pages/Dash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </div>
  );
}

export default App;
