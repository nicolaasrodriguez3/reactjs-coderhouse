import React, {useContext, useState} from "react";
import CartContext from "./CartContext";
import { contexto } from "./CartContext";
import CartItem from "./CartItem";

export default function Cart () {

    const {cart} = useContext(contexto);
    const {clearAll} =useContext(contexto);
    
    console.log(cart);
    return (

        <> 
        { cart.lenght !== 0 ?

          <> 
           {cart.map(element=><CartItem key={element.item.id} prod={element} /> )}

            <br /> <br />  <button onClick={()=>{clearAll()}}>Vaciar Carrito</button> 
          
          </> :
          
          

          <> No hay elementos en el carrito</>

        }
        </>

    );



}