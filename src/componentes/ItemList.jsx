import react , {useEffect, useState} from "react";
import Item from "./Item";


export default function ItemList(){

   

   const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);

   const [arrayDeItems, setArrayDeItems]=useState([]);

  


   const productosEnStock = new Promise((resolve,reject)=>{

         const catalogo = [
    {
      nombre: "Remera Classic",
      stock: 5,
      precio: 3500,
      id: "001",
      categoria: "Remeras",
      foto: "https://i.pinimg.com/564x/8d/44/b1/8d44b1e3d758a33af85ce77d39da4e53.jpg",
    },

    {
      nombre: "Remera Vintage",
      stock: 3,
      precio: 3500,
      id: "002",
      categoria: "Remeras",
      foto: "https://i.pinimg.com/564x/97/b0/ac/97b0ac5c5e356621c06deb6ee720b618.jpg",
    },

    {
      nombre: "Remera wiscosin",
      stock: 8,
      precio: 3500,
      id: "003",
      categoria: "Remeras",
      foto: "",
    },

    {
      nombre: "Gorra Torrance",
      stock: 9,
      precio: 2800,
      id: "004",
      categoria: "Accesorios",
      foto: "",
    },

    {
      nombre: "Gorra Overlook",
      stock: 16,
      precio: 2800,
      id: "005",
      categoria: "Accesorios",
      foto: "",
    },

    {
      nombre: "Gorra Silver Creek",
      stock: 11,
      id: "006",
      precio: 2800,
      categoria: "Accesorios",
      foto: "",
    },
    ];
        setTimeout(()=>{
            resolve(catalogo);
        }, 1000)

   });
   
    useEffect(()=>{
        
        

        productosEnStock
        .then ((res) =>{
          
            setLlegoLaPromesa(true)
            setArrayDeItems(res);
            
        })

        .catch(()=>{
            alert("ERROR!");
        });
    
    }, []);

    return(
        <>

        {llegoLaPromesa ?
        <>
            <div className="itemList">
               
                {
                    arrayDeItems.map(item=>{
                    return <Item item={item}/>
                    })
                }
                
            </div>
        </> :

            <> <p className="pantalla-carga">Loading...</p></>
        }


        </>
    )

    
};