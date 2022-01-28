import React  from "react";
import CartWidget from "./CartWidget";
import LogoFinal from "../logo-final-3.png"
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";



export default function NavBar(){

    

    return(
    
        <>
        <nav className="navBar" >
        <div  className="logo-nav">
           <Link to={"/"}>1970 STORE</Link> 
        </div>
        <ul className="botonera">
        <li> <Link to={"/"}>Home</Link></li> 
        <li> <Link to={"/categories/:categoryId"}>Categories</Link></li> 
        <li> <Link to={"/"}><CartWidget  /></Link></li> 
        </ul>
        </nav>

        

    
        </>
    )

};

