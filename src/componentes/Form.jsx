import React, {useEffect, useState, useRef, useContext} from "react";
import { getFirestore} from "../firebase/firebase";
import { contexto } from "./CartContext";
import  {getFirebase} from "../firebase/firebase";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function Form ({total}) {
    const [orderId, setOrderId] = useState("");
    const nameRef = useRef() ;
    const emailRef = useRef() ;
    const addressRef = useRef() ;
    const phoneNumberRef = useRef() ;
    const {cart, setCart} = useContext(contexto);
   

    const [datosEnviados, setDatosEnviados] = useState();
    useEffect(()=>{
        setDatosEnviados(false)
    },[]);

    const submit = ()=>{

        if (nameRef.current.value == "" || emailRef.current.value == "" || addressRef.current.value == ""){

            alert("Debes completar todos los campos")
        }else{


        
        const db = getFirestore();
        const orders = db.collection('orders')
        const miOrden = {

            buyer : {
                nombre : nameRef.current.value ,
                email : emailRef.current.value,
                direccion: addressRef.current.value,
                telefono: phoneNumberRef.current.value,
            },
            items:  {cart},
            total: {total},
           

        }

        orders.add(miOrden)
        .then(({id})=>{
            setOrderId(id);
            setDatosEnviados(true)
        })
        .catch((err)=>{
            console.log(err);
        });

        setCart([]);
       
        
        }
        

    }
 
    return (
      <>
        {datosEnviados ? (
          <>
            <div className="mainscreen">

            <h2> Tu compra ha sido procesada con exito ! </h2>
            <p>Tu numero de orden es : {orderId} </p>

            </div>
          
          </>
        ) : (
          <>
            <div className="mainscreen">
              <h2> Su pedido esta siendo procesado...</h2>
              <p>Complete los siguientes datos para terminar su compra</p>
              <br />
              <br />

              <div className="rightside">
                <h1>1970 Store - Check Out</h1>
                <form action="">
                  <p>Nombre Completo</p>
                  <input
                    name="nombre"
                    className="inputbox"
                    type={"text"}
                    ref={nameRef}
                    placeholder="Nombre y Apellido"
                    required
                  ></input>
                  <p>Numero de Telefono </p>
                  <input
                    name="email"
                    type={"text"}
                    className="inputbox"
                    ref={phoneNumberRef}
                    placeholder="telefono"
                    required
                  ></input>

                  <p>Correo Electronico</p>
                  <input
                    name="email"
                    type={"email"}
                    className="inputbox"
                    ref={emailRef}
                    placeholder="Correo Electronico"
                    required
                  ></input>

                  <p>Direccion</p>
                  <input
                    name="email"
                    type={"text"}
                    className="inputbox"
                    ref={addressRef}
                    placeholder="Direccion"
                    required
                  ></input>
                </form>

                <button
                  onClick={() => {
                    submit();
                  }}
                  class="button"
                >
                  Confirmar compra
                </button>
              </div>
            </div>
          </>
        )}
      </>
    );




}