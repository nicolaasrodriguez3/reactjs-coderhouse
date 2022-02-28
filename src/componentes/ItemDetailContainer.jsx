import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore} from "../firebase/firebase";
import Loader from "./Loader";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
  const {itemId} =useParams();
 

  useEffect(() => {
   
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const miItem = itemCollection.doc(itemId);

    miItem.get()
    .then((doc)=>{
      setProducto({id: doc.id, ...doc.data() });
      setLlegoLaPromesa(true)
    })
    .catch((err)=>{
        alert(err);
    });

    
  

  }, [itemId]);

  return (
    <>
      {llegoLaPromesa ? (
        <>
          <ItemDetail producto={producto} />
        </>
      ) : (
        <>
        <div style={{width:"max-content", marginLeft:"50%"}}><Loader/></div>
        </>
      )}
    </>
  );
}
