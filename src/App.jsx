import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Type from "./pages/Type";
import Flavour from "./pages/Flavour";
import Quantity from "./pages/Quantity";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/type" element={<Type />} />
        <Route path="/flavour/:type" element={<Flavour />} />
        <Route path="/quantity" element={<Quantity />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
