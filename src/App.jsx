// libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./App.css";

//components
import Header from "./components/ui/Header";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import ProductListPage from "./pages/product/ProductListPage";
import Orders from "./pages/orders/Orders";
import Purchase from "./pages/purchase/Purchase";
import RegisterPage from "./pages/login/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import AboutPage from "./pages/about/AboutPage";
import TermsPage from "./pages/terms/TermsPage";
import PrivacyPage from "./pages/privacy/PrivacyPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/product"} element={<ProductListPage />} />
        <Route path={"/product/:id"} element={<ProductPage />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/orders"} element={<Orders />} />
        <Route path={"/purchase"} element={<Purchase />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/terms"} element={<TermsPage />} />
        <Route path={"/privacy"} element={<PrivacyPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
