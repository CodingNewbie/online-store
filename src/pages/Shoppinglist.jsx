import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState("");

    function addItem() {
        console.log("Adding...");
        const copy = [...list];
        copy.push(newItem);
        setList(copy);
        setNewItem("");
    }

    return (
        <div className="shopping-list page">
            <h3>Shopping List</h3>
            <div className="box">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={addItem} className="">
                    Add
                </button>
            </div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
