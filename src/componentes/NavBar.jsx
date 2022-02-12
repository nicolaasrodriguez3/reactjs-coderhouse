import React, {useContext, useEffect, useState}  from "react";
import CartWidget from "./CartWidget";
import LogoFinal from "../logo-final-3.png"
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
import CartContext from "./CartContext";
import { contexto } from "./CartContext";
import Item from "./Item";




export default function NavBar(){

   
    const {cart} = useContext(contexto);
    
   

    const cartCounter = ()=>{

        const res = cart.reduce((acc, item)=>{
            return acc = acc + item.cantidad;
        },0)

        return res ;


    }

  

    return(
    
        <>
        <nav className="navBar" >
        <div  className="logo-nav">
           <Link to={"/"}>1970 STORE</Link> 
        </div>
        <ul className="botonera">
        <li> <Link to={"/"}>Home</Link></li> 
        <li> <Link to={"/categories/Remeras"}>Remeras</Link></li> 
        <li> <Link to={"/categories/Accesorios"}>Accesorios</Link></li> 
        { (cartCounter() !== 0) && <li> <Link to={"/cart"}><CartWidget  /> <span>{cartCounter()}</span> </Link></li> }
        { (cartCounter() === 0) && <li> </li> }
        </ul>
        </nav>

        

    
        </>
    )

};

