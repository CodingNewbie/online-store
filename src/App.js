import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar /> 

      <Catalog />

      <Footer />
    </div>
  );
}

export default App;
