import { getAllByPlaceholderText } from "@testing-library/react";
import React , {useState} from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from "./ItemDetail";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export default function ItemCount ({ producto, OnAdd }){

    const [cantidadDeProductos, setCantidadDeProductos] =useState(1);

    const sumar = ()=>{

        (cantidadDeProductos < producto.stock) ?setCantidadDeProductos(cantidadDeProductos+1):
        alert("Lo sentimos no contamos con unidades disponibles");

    
    };

    const restar = ()=>{
        if(cantidadDeProductos > 0 ) setCantidadDeProductos(cantidadDeProductos-1)
    };

  
   
    return(
        <>
        <div className="countContainer">
            <div className="itemCounter">
                <button onClick={()=> restar()} className="substractItem"> - </button>
                <div className="itemQuantity">{cantidadDeProductos}</div>
                <button onClick={()=> sumar()} className="addItem" > + </button>
            </div>

            <div className="addToCart" >
                <button onClick={()=>OnAdd(cantidadDeProductos)}>
                    Agregar al carrito <span> <FontAwesomeIcon icon={faShoppingCart}/> </span>
                </button> 
            </div>
        </div>

        </>
    );

};