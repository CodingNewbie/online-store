import "./Product.css"
import QuantityPicker from "./QuantityPicker";
import constants from '../common/config';
function Product(props) {

function add() {
  console.log('adding product');
}

    return (
      <div className="product">
        <img src={constants.IMAGE_PATH + props.info.image} alt=""/>
        <h6>{props.info.title}</h6>
        <label>Price: ${props.info.price}</label>
        <QuantityPicker />
        <button onClick={add} className="add-btn">Add</button>
      </div>
    );
  }
  
  export default Product;