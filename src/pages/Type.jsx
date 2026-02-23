import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Type() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN PAGE */}
      <div className="type-page">
        <h1 className="page-title">
          🍨 Pick Your Ice Cream Style 🍦
        </h1>

        <p className="page-subtitle">
          Life is short, eat the ice cream first 😍  
          Choose how you want to enjoy your scoop!
        </p>

        <div className="type-cards">
          <div
            className="type-card"
            onClick={() => navigate("/flavour/cone")}
          >
            <img src="/cone1.webp" alt="Cone" />
            <p>Cone</p>
            <span className="tagline">Crunchy & Fun 😋</span>
          </div>

          <div
            className="type-card"
            onClick={() => navigate("/flavour/cup")}
          >
            <img src="/cup1.webp" alt="Cup" />
            <p>Cup</p>
            <span className="tagline">Classic Choice 🍨</span>
          </div>

          <div
            className="type-card"
            onClick={() => navigate("/flavour/family")}
          >
            <img src="/family1.webp" alt="Family Pack" />
            <p>Family Pack</p>
            <span className="tagline">Share the Happiness 👨‍👩‍👧‍👦</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
