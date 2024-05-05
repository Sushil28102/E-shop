import { createContext, useState,useEffect } from "react";

 export const UserContext=createContext();

export const ContextProvider=(props)=>{
    const[items,setItems]=useState([]);
    const [data, setData] = useState([]);

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then((json)=>{
          console.log(json)
          setData(json)
  })
},[items,data])

 return(
    <UserContext.Provider value={{items,setItems,data,setData}}>
    {props.children}
  </UserContext.Provider>
 )

}