import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Product from "./components/Product";
import ShoppingList from "./pages/Shoppinglist";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Catalog />

            <ShoppingList />

            <Footer />
        </div>
    );
}

export default App;
