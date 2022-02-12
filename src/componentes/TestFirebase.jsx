import React, {useEffect, useState} from "react";
import { getFirestore} from "../firebase/firebase";

export default function TestFirebase () {

    const [items, setITems]= useState([]);
   
    useEffect(()=>{
        
        const db = getFirestore();
        const itemCollection = db.collection("items");

        itemCollection.get()
        .then((querySnapShot)=>{
            
            setITems(querySnapShot.docs.map((doc)=>{
                
                return {id: doc.id, ...doc.data()}
            
            }));



        })
        .catch((err)=>{
            alert(err);
        });


    },[]);


    return (
        <>      
            <h1> La coleccion entera de Items</h1>
            {JSON.stringify(items)}
        </>
    );

};
