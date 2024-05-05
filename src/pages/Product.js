import React,{useContext} from "react";
import { UserContext } from "../context/UserContext";


const Product = () => {
const Cart = useContext(UserContext);
 console.log(Cart)
 
  return (
    <div className="d-flex flex-wrap gap-4 mt-4">
    { Cart && Cart.data.map((item,id) => {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-text">
              {item.category}
            </h3>
            <h3 className="card-text">
              {item.price}
            </h3>
            <h3 className="card-text">
              {item.title}
            </h3>
            <p className="card-text">
              {item.description}
            </p>
            <button type="button" class="btn btn-success" onClick={()=>Cart.setItems([...Cart.items,{name:item.category}])}>Buy Now</button>
          </div>
        </div>
      );
    }) }
  </div>
  );
};

export default Product;
