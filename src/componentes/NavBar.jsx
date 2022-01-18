import React  from "react";
import CartWidget from "./CartWidget";
import LogoFinal from "../logo-final-3.png"



export default function NavBar({nombre, arrayDeLinks}){

    let verticalMode= false;
    let navBarDirection = "";
    let botonera = "";

    if (verticalMode===true){
        navBarDirection = "navBar-b";
        botonera = "botonera-b"
    }else{
        navBarDirection = "navBar";
        botonera = "botonera"
    };

   

    return(
    
        <>
        <nav className={navBarDirection}>
        <div  className="logo-nav">
            <a href="https://"><img src={LogoFinal} height={83.3} width={133} alt="logo" /></a>
        </div>
        <ul className={botonera}>

        {arrayDeLinks.map(link => <li><a href="https//">{link}</a></li>)}
        <li> <a href="https://"><CartWidget  /></a></li> 
        </ul>
        </nav>

        

    
        </>
    )

};

