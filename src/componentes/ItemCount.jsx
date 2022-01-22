import { getAllByPlaceholderText } from "@testing-library/react";
import React , {useState} from "react";
import ItemList from "./ItemList";

export default function ItemCount ({ stock, nombre }){

    const [cantidadDeProductos, setCantidadDeProductos] =useState(1);

    //const stock = 10;
    const [stockDisponible, setStockDisponible] = useState({stock});


    const [nombreDelProducto, setNombreDelProducto]= useState({nombre});

    const sumar = ()=>{

        (cantidadDeProductos < stockDisponible.stock) ?setCantidadDeProductos(cantidadDeProductos+1):
        alert("Lo sentimos no contamos con unidades disponibles");
    };

    const restar = ()=>{
        if(cantidadDeProductos > 0 ) setCantidadDeProductos(cantidadDeProductos-1)
    };

   const OnAdd= ()=>{
       (cantidadDeProductos > 0) ? alert(`se han agregado ${cantidadDeProductos} "${nombreDelProducto.nombre}" al carrito`)
       
       : alert(`Debes ingresar una cantidad validad de productos ` );
       
       setCantidadDeProductos(1)
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