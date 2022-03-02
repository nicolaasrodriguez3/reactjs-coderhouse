import React, { useState, useEffect, createContext } from "react";
import { useContext } from "react/cjs/react.development";

export const contexto = createContext();

export default function CartContext ({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) =>{
        if(isInCart(producto.id)){
            const indexItem = cart.findIndex(ele => ele.item.id === producto.id);
            cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
            setCart([...cart])

        }else{
            setCart([...cart, {item: producto, cantidad}])
        }
       

    };

    const removeItem = (id) =>{
        const updateCart = cart.filter(element=>element.item.id !== id);
        setCart(updateCart);
    };

    const clearAll = () =>{
        setCart([]);
    };

    

    const isInCart = (id)=>{
        return cart.some(element => element.item.id === id)
    }

    return (
        <>
           <contexto.Provider value={{cart, addItem, removeItem,  clearAll,setCart }}>
                {children}
            </contexto.Provider>
        </>
    );
}