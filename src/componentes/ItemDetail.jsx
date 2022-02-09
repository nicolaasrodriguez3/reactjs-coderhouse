import react , {useState, useContext} from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";
import { contexto } from "./CartContext";


export default function ItemDetail ({producto}){

    const {addItem} = useContext(contexto);

    const [mostrarItemCount, setMostrarItemCount]=useState(true);

    const OnAdd= (cantidad)=>{
        
        addItem(producto, cantidad);
        alert(`Se añadieron ${cantidad} de ${producto.nombre} al carrito`);
        setMostrarItemCount(false);
    }

    return(
        <>
        { (producto)?
           <div className="itemDetail">
               <div className="product-category">{producto.categoria}</div>
               <div className="product-container">
            <img src={producto.foto} height={500} width={350} alt="imagen-producto" />

            <div className="product-data">
                
                <div className="product-name">{producto.nombre}</div>
                <div className="product-price"> $ {producto.precio}</div>
                <div className="product-stock">unidades disponibles: {producto.stock}</div>
                { (mostrarItemCount)?
                    <ItemCount producto={producto} OnAdd={OnAdd}></ItemCount> 
                    :
                    <div>
                        <p>Su pedido se encuentra en el Carrito</p>
                        
                       <Link to={'/cart'}><button>Terminar Compra</button></Link>
                       <Link to={'/'}><button>Seguir Comprando</button></Link>
                    </div> 
                }
                

            </div>
            </div>
           </div>

           :

           <>Ha ocurrido un Error ! </>
           }
        </>

    )


};