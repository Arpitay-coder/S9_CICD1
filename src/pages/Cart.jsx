import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // 👉 IMPORTANT: handle empty cart
  if (!state) {
    return (
      <>
        <Header />
        <Navbar />

        <div className="cart-page">
          <div className="cart-box">
            <h1 className="cart-title">🛒 Your Cart is Empty</h1>

            <p className="cart-line">
              Looks like you haven't added any ice cream yet 🍦
            </p>

            <button
              className="cart-btn"
              onClick={() => navigate("/type")}
            >
              Start Ordering 🍨
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // ✅ safe to calculate now
  const total = state.price * state.qty;

  return (
    <>
      <Header />
      <Navbar />

      <div className="cart-page">
        <div className="cart-box">
          <h1 className="cart-title">🛒 Your Ice Cream Cart</h1>

          <p className="cart-line">
            One step closer to happiness 🍦😋
          </p>

          <div className="cart-details">
            <p><strong>Flavour:</strong> {state.name}</p>
            <p><strong>Type:</strong> {state.type}</p>
            <p><strong>Quantity:</strong> {state.qty}</p>
          </div>

          <h2 className="cart-total">
            Total Amount: ₹{total}
          </h2>

          <button
            className="cart-btn"
            onClick={() => navigate("/payment")}
          >
            Pay Now 💳
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
