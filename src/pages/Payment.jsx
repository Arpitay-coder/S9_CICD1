import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Payment() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* PAYMENT SECTION */}
      <div className="payment-page">
        <div className="payment-overlay">
          <div className="payment-box">
            <h1>💳 Payment Successful</h1>

            <p className="payment-line">
              Your ice cream happiness is on the way 🍦🚚
            </p>

            <p className="payment-thank">
              Thank you for choosing Ice Cream World ❤️
            </p>

            <button
              className="payment-btn"
              onClick={() => navigate("/")}
            >
              Logout 🍨
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
