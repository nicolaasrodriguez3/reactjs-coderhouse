import react, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";

export default function Item({ item }) {
  useEffect(() => {});

  return (
    <>
    <Link className="linkToDetails" to={`/item/${item.id}`}>
      <div className="item-card">
        <div className="item-name">{item.nombre}</div>

        <div className="item-imagen"></div>

        <Link to={`/item/${item.id}`}><button>Ver Detalle del producto</button></Link>

        <div>Unidades Disponibles: {item.stock}</div>

        

      </div>
      </Link>
    </>
  );
}
