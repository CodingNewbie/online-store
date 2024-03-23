import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
    const data = [
        {
            title: "Tomatoes",
            price: 6.45,
            category: "Fruit",
            image: "tomatoes.jpg",
            _id: "0001",
        },
        {
            title: "Oranges",
            price: 4.99,
            category: "Fruit",
            image: "oranges.jpg",
            _id: "0002",
        },
        {
            title: "Eggs",
            price: 9.99,
            category: "Poultry Product",
            image: "eggs.jpg",
            _id: "0003",
        },
        {
            title: "Strawberries",
            price: 6.99,
            category: "Fruit",
            image: "strawberries.jpg",
            _id: "0004",
        },
        {
            title: "Broccoli",
            price: 7.99,
            category: "Vegetable",
            image: "broccoli.jpg",
            _id: "0005",
        },
        {
            title: "Carrots",
            price: 4.99,
            category: "Vegetable",
            image: "carrots.jpg",
            _id: "0006",
        },
    ];

    return (
        <div className="catalog">
            <h1>Our amazing catalog!!</h1>

            {data.map((product) => (
                <Product key={product._id} info={product} />
            ))}
        </div>
    );
}

export default Catalog;
