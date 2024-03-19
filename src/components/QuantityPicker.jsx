import { useState } from 'react';
import "./QuantityPicker.css"


function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function increase() {
        setQuantity(quantity + 1);
    }

    return (
        <div className="quantity-picker">
            <button disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
  }
  
  export default QuantityPicker;