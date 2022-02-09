import React, {useContext, useState} from "react";
import CartContext from "./CartContext";
import { contexto } from "./CartContext";
import CartItem from "./CartItem";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";


export default function Cart () {

    const {cart} = useContext(contexto);
    const {clearAll} =useContext(contexto);
    const precioTotal = ()=>{

      const res = cart.reduce((acc, item)=>{ 
        return acc = acc + (item.item.precio) * item.cantidad ;
        
      
      } ,0);

      return res 

      
  
    }


    return (

        <> 
        { (cart.length) !== 0 ?

          <> 
          
            <h2 className="cartTitle"> Mi Carrito <span>({cart.length})</span></h2>
            <div className="cartContainer">
              {cart.map(element=><CartItem key={element.item.id} prod={element} /> )}

              <div className="subTotal">
               <button onClick={()=>{clearAll()}}>Vaciar Carrito</button> 
                <p>Total a pagar: ${precioTotal()} </p>
            </div>

            </div>

           

            </> 
            :

          <> 
            <div className="emptyCart">
              <p> El carrito se encuentra vacio</p>
             <Link className="linkToHome" to={"/"}>Agregar Productos </Link> 
              
            </div>
              
          </>

        }
        </>

    );



}