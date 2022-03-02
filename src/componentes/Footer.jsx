import react, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";

export default function Footer() {
  

  return (
    <>
    <footer className="footer">

        <div className="logo">
        <Link className="link" to={"/"}>1970 STORE</Link> 
        </div>

        <div><p>Indumentaria y Accesorios </p></div>
        <div><p>Desarrollado por:  Nicolas Rodriguez - 2022</p></div>

    </footer>
     
    </>
  );
}