import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { add } from "../Redux/CartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const itemProduct=useDispatch();

  const myProducts = async () => {
    const dataItem = await fetch("https://fakestoreapi.com/products");
    const response = await dataItem.json();
    const data = setProducts(response);
    console.log(data);
    console.log(response);
  };

  useEffect(() => {
    myProducts();
  }, []);

 
  const handleAdd=(items)=>{
    itemProduct(add(items))
  }

  return (
    <div className="flex-container">
      {products.map((items) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={items.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4>{items.category}</h4>
            <h4>${items.price}</h4>
            <p className="card-text">{items.description}</p>
          </div>
          <button type="button" class="btn btn-primary" onClick={()=>handleAdd(items)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
