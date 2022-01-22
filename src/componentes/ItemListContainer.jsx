import React from "react";
import ItemList from "./ItemList"

export default function ItemListContainer ({saludo}){
    return(
        <>
        <div className='itemListContainer'>
        <h1 className="greeting">{saludo}</h1>

        <ItemList/>
        </div>
        </>
    )
};