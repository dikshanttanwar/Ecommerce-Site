import React, { createContext, useEffect, useState } from "react";
import axios from '../Utility/axios'
export const ProductContext = createContext();

const Context = (props) => {

    let [products,setProducts] = useState( JSON.parse(localStorage.getItem('product')) || null);

    // const getProducts= async()=>{
    //     try {
    //         const {data} = await axios('/products');
    //         setProducts(data)   
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     }
    // };

    // useEffect(()=>{
    //     getProducts()
    // },[])

  return <ProductContext.Provider value={[products,setProducts]} >{props.children}</ProductContext.Provider>;
};

export default Context;
