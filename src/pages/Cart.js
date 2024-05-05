import { UserContext } from '../context/UserContext';
import React, { useContext} from "react";

const Cart = () => {
const cart=useContext(UserContext);

  return (
    <div>
     {
      cart && cart.items.map((item)=>{
        return(
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
              <button type="button" class="btn btn-success">Buy Now</button>
            </div>
          </div>
        )
      })
     }
    </div>
  )
}

export default Cart;