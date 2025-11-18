import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import CheckoutHeader from "./components/CheckoutHeader"; // Import CheckoutHeader
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Tshirts from "./pages/Tshirts";
import Hoodies from "./pages/Hoodies";
import PrintedShirts from "./pages/PrintedShirts";
import Tracksuits from "./pages/Tracksuits";
import About from "./pages/About";
import Product from "./Pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Verify from "./pages/Verify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Order from "./Pages/Order";

export default function App() {
  const location = useLocation();

  return (
  <main className="overflow-hidden text-[#323232] bg-primary">
      <ToastContainer />
      {location.pathname === "/place-order" ? <CheckoutHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/T-shirts" element={<Tshirts />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/Printed-Shirts" element={<PrintedShirts />} />
        <Route path="/tracksuits" element={<Tracksuits />} />
        <Route path="/About-Us" element={<About />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
  </main>
  );
}
