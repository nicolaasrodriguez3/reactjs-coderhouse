import react , {useState, useContext} from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";
import { contexto } from "./CartContext";
import Item from "./Item";
import Loader from "./Loader";


export default function ItemDetail ({producto}){

    const {addItem} = useContext(contexto);

    const [loading, setLoading] = useState(true)

    const [mostrarItemCount, setMostrarItemCount]=useState(true);

    const OnAdd= (cantidad)=>{
        
       if (cantidad > 0){
        addItem(producto, cantidad);
        setMostrarItemCount(false);

       }else{
           alert("debe seleccionar al menos 1 producto")
       }
    }

    return(
        <>
        { (producto)?
           <div className="itemDetail">
               <div className="product-category">{producto.categoria}</div>
               <div className="product-container">
                <div className="img-container"><img src={producto.foto} alt="imagen-producto" /></div>

            <div className="product-data">
                
                <div className="product-name">{producto.nombre}</div>
                <div className="product-stock">unidades disponibles: {producto.stock}</div>
                <div className="product-price"> $ {producto.precio}</div>
                <div><p>{producto.descripcion}</p></div>
                
                
                
                { (mostrarItemCount)?
                    <ItemCount producto={producto} OnAdd={OnAdd}></ItemCount> 
                    :
                    <div className="compraFinalizada">
                        <p>Su producto se encuentra en el carrito ! </p>
                        <div className="btn-container">
                       <Link to={'/cart'}><button className="terminarCompraBtn">Ver Carrito</button></Link>
                       <Link to={'/'}><button className="seguirComprandoBtn" >Seguir Comprando</button></Link>
                       </div>
                    </div> 
                }
                

            </div>
            </div>
           </div>

           :

           <div><Loader/></div>
           }
        </>

    )


};