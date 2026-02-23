import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="nav-logo">🍦 IceCream World</h3>

      <ul className="nav-links">
        <li><Link to="/welcome">Home</Link></li>
        <li><Link to="/type">Ice Creams</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
}
