import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/CartSlice';
import '../App.css'

const Cart = () => {

  const cartSelector=useSelector((state)=>state.cart)
  const itemDispatch=useDispatch()

  const handleRemove=(id)=>{
    itemDispatch(remove(id))
  }

  return (
    <div className="flex-container">
    {
      cartSelector.map((items)=>{
        return(
          <div className="card" style={{ width: "18rem" }}>
          <img src={items.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4>{items.category}</h4>
            <h4>${items.price}</h4>
            <p className="card-text">{items.description}</p>
          </div>
          <button type="button" class="btn btn-primary" onClick={()=>handleRemove(items.id)}>Remove to Cart</button>
        </div>
        )
      })
    }
    
    </div>
  )
}

export default Cart;