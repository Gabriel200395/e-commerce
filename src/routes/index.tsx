import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Cart from "../page/shopping_cart";

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
