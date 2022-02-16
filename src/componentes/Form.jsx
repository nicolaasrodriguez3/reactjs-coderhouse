import React, {useEffect, useState, useRef, useContext} from "react";
import { getFirestore} from "../firebase/firebase";
import { contexto } from "./CartContext";
import  {getFirebase} from "../firebase/firebase";

export default function Form () {
    const [oderId, setOrderId] = useState("");
    const nameRef = useRef() ;
    const emailRef = useRef() ;
    const addressRef = useRef() ;
    const phoneNumberRef = useRef() ;
    const {cart} = useContext(contexto);

    const submit = ()=>{

        
        const db = getFirestore();
        const orders = db.collection('orders')
        const miOrden = {

            buyer : {
                nombre : nameRef.current.value ,
                email : emailRef.current.value,
                direccion: addressRef.current.value,
                telefono: phoneNumberRef.current.value,
            },
            items: cart ,
            total:"" ,
           

        }

        orders.add(miOrden)
        .then(({id})=>{
            setOrderId(id);
            console.log("se enviaron los datos")
        })
        .catch((err)=>{
            console.log(err);
        })

    }
 
    return (

        <>
        <h2> Su pedido esta siendo procesado</h2>
        <p>Complete los siguientes datos para terminar su compra</p><br /><br />
        
        <div>

         <input name="nombre" type={"text"} ref={nameRef} placeholder="Nombre y Apellido"></input> <br />

         <input name="email" type={"email"} ref={emailRef} placeholder="Correo Electronico"></input> <br />
         <input name="email" type={"text"} ref={phoneNumberRef} placeholder="telefono"></input> <br />
         <input name="email" type={"text"} ref={addressRef} placeholder="direccion" ></input>
         
        <button onClick={()=>{submit()}}>Enviar Datos </button>
        </div>
        </>


    )




}