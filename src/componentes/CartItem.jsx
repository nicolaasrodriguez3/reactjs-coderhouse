import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import { contexto } from "./CartContext";

export default function CartItem({ prod }) {
  const { removeItem } = useContext(contexto);

  return (
    <>
      <h3>{prod.item.nombre}</h3>
      <p>cantidad: {prod.cantidad}</p>
      <button
        onClick={() => {
          removeItem(prod.item.id);
        }}
      >
        Eliminar del carrito
      </button>
    </>
  );
}
