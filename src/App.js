import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import ShoppingList from "./pages/Shoppinglist";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/shoppinglist" element={<ShoppingList />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
