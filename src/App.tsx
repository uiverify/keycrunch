import { Route, Routes } from "react-router-dom";
import { Shell } from "@/components/Chrome";
import { Cart } from "@/pages/Cart";
import { Category } from "@/pages/Category";
import { Checkout } from "@/pages/Checkout";
import { Confirmation } from "@/pages/Confirmation";
import { Home } from "@/pages/Home";
import { Product } from "@/pages/Product";

export function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Category />} />
        <Route path="/shop/:category" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/confirmed" element={<Confirmation />} />
      </Routes>
    </Shell>
  );
}
