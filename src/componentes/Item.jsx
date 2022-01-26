import react, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

export default function Item({ item }) {
  useEffect(() => {});

  return (
    <>
      <div className="item-card">
        <div className="item-name">{item.nombre}</div>

        <div className="item-imagen">Imagen del producto</div>

        <button>Ver Detalle del producto</button>

        <div>Unidades Disponibles: {item.stock}</div>

        <ItemCount stock={item.stock} nombre={item.nombre}></ItemCount>

      </div>

    </>
  );
}