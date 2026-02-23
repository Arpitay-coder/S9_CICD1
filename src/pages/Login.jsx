import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const handleLogin = () => {
    if (user.trim()) navigate("/welcome");
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="login-page">
        <div className="login-box glass pop-animate">
          <h2>🍦 Ice Cream Login</h2>
          <p className="login-subtitle">
            Login & scoop happiness instantly 😋
          </p>

          <input
            placeholder="Enter your name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="or-line">
            <span>OR</span>
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <button
            className="phone-btn"
            onClick={() => setShowOTP(true)}
          >
            Continue with Phone Number
          </button>

          <p className="discount-line">
            🔥 Flat 50% OFF | Buy 1 Get 1 Free 🔥
          </p>

          <p className="contact-line">
            📞 Need help? Call <b>1800-ICE-LOVE</b>
          </p>
        </div>
      </div>

      {/* OTP POPUP */}
      {showOTP && (
        <div className="otp-overlay">
          <div className="otp-box pop-animate">
            <h3>📲 Verify OTP</h3>
            <p>Enter the 4-digit OTP sent to your phone</p>

            <input placeholder="Enter OTP" />

            <button onClick={() => navigate("/welcome")}>
              Verify & Continue
            </button>

            <span
              className="close-btn"
              onClick={() => setShowOTP(false)}
            >
              ✖
            </span>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
