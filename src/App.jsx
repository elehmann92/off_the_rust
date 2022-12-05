import { useState } from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
