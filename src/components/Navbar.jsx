/**
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 * are usually exported
 */
import "./Navbar.css";
import "./Footer.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="logo">PantryPickers</a>
      <nav className="nav-links">
        <a href="/">Shop</a>
        <a href="/">Special Offers</a>
        <a href="/">Recipes</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
      </nav>
      <a href="/">Adam Schmidt</a>
    </div>
  );
}

export default Navbar;
