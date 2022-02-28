import react, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";

export default function Item({ item }) {
  useEffect(() => {});

  return (
    <>
    <Link className="linkToDetails" to={`/item/${item.id}`}>
      <div className="card">
        <div className="imgBox">
          <img src={item.foto} alt="imagen-producto" />
          <div className="overlay">
            <Link className="buyButton" to={`/item/${item.id}`}>Comprar</Link>
          </div>
        </div>
        <div className="contentBox">
          <h3>{item.nombre}</h3> 
          <div className="price">${item.precio}</div>
    
        </div>
      </div>

      </Link>
    </>
  );
}
