import react , {useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";


export default function ItemDetail ({producto}){


    

    return(
        <>
           <div className="itemDetail">
               <div className="product-category">{producto.categoria}</div>
               <div className="product-container">
            <img src={producto.foto} height={500} width={350} alt="imagen-producto" />

            <div className="product-data">
                
                <div className="product-name">{producto.nombre}</div>
                <div className="product-price"> $ {producto.precio}</div>
                <div className="product-stock">unidades dispoibles: {producto.stock}</div>
                <ItemCount/>

            </div>
            </div>
           </div>
        </>

    )


};