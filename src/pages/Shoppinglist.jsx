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

    function deleteAll() {
        setList([]);
    }

    function removeItem() {}

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
                <button onClick={deleteAll}>Clear</button>
            </div>
            <ul>
                {list.map((item, index) => (
                    <div>
                        <li key={index}>{item}</li>
                        <button onClick={removeItem}>Remove</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
