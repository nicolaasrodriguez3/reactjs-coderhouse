import react , {useEffect, useState} from "react";
import Item from "./Item";


export default function ItemList(){

   

    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);

   const [arrayDeItems, setArrayDeItems]=useState([
    {
        nombre : "Remera 1",
        stock: 5,
    },

    {
        nombre : "Remera 2",
        stock: 3,
    },

    {
        nombre : "Remera 4",
        stock: 8,
    },

    
    {
        nombre : "Gorra 1",
        stock: 9,
    },

    {
        nombre : "Gorra 2",
        stock: 16,
    },

    {
        nombre : "Gorra 3",
        stock: 11,
    }

   ]);


   const productosEnStock = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(arrayDeItems);
        }, 3000)

   });
   
    useEffect(()=>{
        
        productosEnStock
        .then (res =>{
            setLlegoLaPromesa(true)
            setArrayDeItems(res)
        })

        .catch(()=>{
            alert("ha ocurrido un error");
        });
    
    });

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