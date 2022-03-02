import React, { useContext, useState, useEffect } from "react";
import { contexto } from "./CartContext";
import CartItem from "./CartItem";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import Form from "./Form";

export default function Cart() {
  const { cart } = useContext(contexto);
  const { clearAll } = useContext(contexto);
  const [checkOut, setCheckOut] = useState();

  useEffect(() => {
    setCheckOut(false);
  }, []);

  const checkingOut = () => {
    setCheckOut(true);
  };

  const precioTotal = () => {
    const res = cart.reduce((acc, item) => {
      return (acc = acc + item.item.precio * item.cantidad);
    }, 0);

    return res;
  };

  return (
    <>
      {checkOut ? (
        <>
        <Form total={precioTotal()}/>
        
        
        </>
      ) : (
        <>
          {cart.length !== 0 ? (
            <>
              <h2 className="cartTitle">
                {" "}
                Mi Carrito <span>({cart.length})</span>
              </h2>
              <div className="cartContainer">
                {cart.map((element) => (
                  <CartItem key={element.item.id} prod={element} />
                ))}

                <div className="subTotal">
                  <p>Total a pagar: ${precioTotal()} </p>
                </div>
                <div className="btn-container">
                  <button
                    className="cleanAll-btn"
                    onClick={() => {
                      clearAll();
                    }}
                  >
                    Vaciar Carrito
                  </button>
                  <button
                    className="checkOut-btn"
                    onClick={() => {
                      checkingOut();
                    }}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="emptyCart">
                <p> El carrito se encuentra vacio</p>
                <Link className="linkToHome" to={"/"}>
                  Agregar Productos{" "}
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
