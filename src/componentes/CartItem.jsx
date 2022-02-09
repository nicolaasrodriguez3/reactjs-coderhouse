import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import { contexto } from "./CartContext";

export default function CartItem({ prod }) {
  const { removeItem } = useContext(contexto);

  const precio = ()=>{
    const precioItem = Number(prod.item.precio)
    const cantidad = Number( prod.cantidad)

    return precioItem * cantidad
  }

 

  return (
    <>
      
      <div className="cartItemContainer">

        <div className="imagen">Imagen de producto</div>
        <h3>{prod.item.nombre}</h3>
        <p>Cantidad: {prod.cantidad}</p>

        <p>Precio: ${precio()}</p>

        <button
          onClick={() => {
            removeItem(prod.item.id);
          }} className="removeItem">
         Eliminar X
        </button>
      </div>
    </>
  );
}
