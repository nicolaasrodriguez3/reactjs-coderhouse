import React , {useState} from "react";

export default function ItemCount (){

    const [cantidadDeProductos, setCantidadDeProductos] =useState(1);

    const stock = 10;

    const sumar = ()=>{

        if(cantidadDeProductos < stock) setCantidadDeProductos(cantidadDeProductos+1)
    };

    const restar = ()=>{
        if(cantidadDeProductos > 0 ) setCantidadDeProductos(cantidadDeProductos-1)
    };

   const OnAdd= ()=>{
       (cantidadDeProductos > 0) ? alert(`se ha agregado ${cantidadDeProductos} productos al carrito`)
       
       : alert("Debes ingresar una cantidad validad de productos");
       
       setCantidadDeProductos(0)
   }
   
    return(
        <>
        <div className="countContainer">
            <div className="itemCounter">
                <button onClick={()=> restar()} className="sustractItem"> - </button>
                <div>{cantidadDeProductos}</div>
                <button onClick={()=> sumar()} className="addItem"> + </button>
            </div>

            <div className="addToCart" >
                <button onClick={()=> OnAdd()}>
                    Agregar al carrito
                </button>
            </div>
        </div>

        </>
    );

};