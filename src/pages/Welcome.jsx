import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function Welcome() {
  useEffect(() => {
  const cards = document.querySelectorAll(".ad-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
}, []);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Navbar />

      {/* TOP SECTION */}
      <div className="welcome-page">
        
  

        <div className="welcome-box">
          <div className="offer-banner">
            🔥 BUY 1 GET 1 FREE | FLAT 50% OFF TODAY 🔥
          </div>

          <h1 className="welcome-title">
            Welcome to Ice Cream World 🍨
          </h1>

          <p className="welcome-text">
            Choose happiness, choose ice cream!
          </p>

          <button
            className="welcome-btn"
            onClick={() => navigate("/type")}
          >
            Start Ordering
          </button>
        </div>

  

      </div>

      {/* SCROLL SECTION */}
      <div className="scroll-ads">
        <h2>Why Everyone Loves Our Ice Cream ❤️</h2>

        <div className="ad-cards">
          <div className="ad-card">
            <img src="\wel.jpg" alt="download(1)" />
            <h3>Pure Belgian Chocolate 🍫</h3>
            <p>Rich, creamy & made for true chocolate lovers.</p>
          </div>

          <div className="ad-card">
            <img src="watermark.jpeg" alt="exortic" />
            <h3>Real Strawberry Delight 🍓</h3>
            <p>Made from fresh hand-picked strawberries.</p>
          </div>

          <div className="ad-card">
            <img src="download (4).jpeg" alt="Vanilla" />
            <h3>Classic Vanilla Bliss 🤍</h3>
            <p>Smooth, timeless & loved by all ages.</p>
          </div>
        </div>

        <div className="big-ad-line">
          😍 Over <strong>50,000+</strong> happy customers  
          🍦 Made fresh daily  
          🚚 Delivered ice-cold at your doorstep
        </div>
      </div>

      <Footer />
    </>
  );
}
