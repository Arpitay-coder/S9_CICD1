import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Flavour() {
  const { type } = useParams();
  const navigate = useNavigate();

  const flavours = [
    {
      name: "Chocolate",
      price: 80,
      img: "/chocolate.webp",
      ingredients: "Rich cocoa, fresh milk, natural sugar",
      users: "12,450+ happy customers",
      tagline: "Deep, dark & dangerously delicious 🍫",
    },
    {
      name: "Vanilla",
      price: 60,
      img: "/vanilla.jpeg",
      ingredients: "Madagascar vanilla, cream, milk",
      users: "9,800+ happy customers",
      tagline: "Classic, creamy & comforting 🤍",
    },
    {
      name: "Strawberry",
      price: 70,
      img: "/strawberry.jpeg",
      ingredients: "Real strawberries, milk, cream",
      users: "10,200+ happy customers",
      tagline: "Fresh, fruity & full of love 🍓",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <div className="flavour-page">
        <h1 className="page-title">
          {type.toUpperCase()} Ice Cream Flavours 🍦
        </h1>

        <p className="page-subtitle">
          Crafted with love, served with happiness ❤️  
          Choose your favourite and treat yourself!
        </p>

        <div className="flavour-list">
          {flavours.map((f) => (
            <div className="flavour-card" key={f.name}>
              {/* IMAGE */}
              <div className="flavour-image">
                <img src={f.img} alt={f.name} />
              </div>

              {/* DETAILS */}
              <div className="flavour-details">
                <h2>{f.name}</h2>
                <p className="tagline">{f.tagline}</p>

                <p><strong>Ingredients:</strong> {f.ingredients}</p>
                <p><strong>Loved by:</strong> {f.users}</p>

                <p>
                  <strong>Manufacturing:</strong> Hygienically produced in
                  ISO-certified facilities
                </p>
                <p>
                  <strong>Delivery:</strong> Kept frozen & delivered fresh 🚚❄️
                </p>
                <p>
                  <strong>Certification:</strong> FSSAI & ISO Certified ✅
                </p>

                <div className="price-row">
                  <span className="price">₹{f.price}</span>

                  <button
                    onClick={() =>
                      navigate("/quantity", { state: { ...f, type } })
                    }
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
