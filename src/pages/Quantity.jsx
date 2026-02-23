import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Quantity() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [shake, setShake] = useState(false);
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    setShake(true);
    const t = setTimeout(() => setShake(false), 300);
    return () => clearTimeout(t);
  }, [qty]);

  return (
    <>
      <Header />
      <Navbar/>

      <div className="quantity-page">
        <h1 className="quantity-title">🍦 Choose Your Quantity</h1>

        <p className="quantity-subtitle">
          One scoop is never enough… trust us 😍
        </p>

        <div className="quantity-line">
          ✨ Happiness increases with every scoop ✨
        </div>

        <div className={`quantity-image ${shake ? "shake" : ""}`}>
          <img src="/pexels-prolificpeople-29851696.jpg" alt="Select Quantity" />
        </div>
        

        {/* QUANTITY */}
        <div className="quantity-input-box">
          <label>How many scoops make you smile? 😋</label>

          <div className="qty-controls">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>−</button>

            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />

            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <p className="scoop-hint">
            🍨 {qty} scoop{qty > 1 ? "s" : ""} = {qty * 100}% happiness
          </p>
        </div>

        {/* ADDRESS */}
        <div className="address-box">
          <label>📍 Delivery Address</label>
          <textarea
            placeholder="Enter your full delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>📮 Pin Code</label>
          <input
            type="text"
            placeholder="Enter 6-digit pin code"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        {/* CTA */}
        <button
          className="quantity-btn pulse"
          onClick={() => {
            if (!address || !pincode) {
              alert("Please enter delivery address and pin code 🏠📮");
              return;
            }

            navigate("/cart", {
              state: {
                ...state,
                qty,
                address,
                pincode,
              },
            });
          }}
        >
          🛒 Add {qty} Scoop{qty > 1 ? "s" : ""} to Cart
        </button>

        <p className="trust-line">
          ❄️ Freshly scooped • 🚚 Delivered frozen • ❤️ Loved by thousands
        </p>
      </div>

      <Footer />
    </>
  );
}
