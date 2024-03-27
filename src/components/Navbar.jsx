/**
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 * are usually exported
 */
import "./Navbar.css";
import "./Footer.css";

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <a href="/" className="logo">
                PantryPickers
            </a>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shoppinglist">Shopping List</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/about">About Us</Link>
                <Link to="/admin">Admin</Link>
            </nav>
            <Link to="/">Adam Schmidt</Link>
        </div>
    );
}

export default Navbar;
