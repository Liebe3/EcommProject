import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/Header";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/cart/CartPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/product"} element={<ProductPage />} />
        <Route path={"/cart"} element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
