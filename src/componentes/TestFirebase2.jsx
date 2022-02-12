import React, {useEffect, useState} from "react";
import { getFirestore} from "../firebase/firebase";

export default function TestFirebase2 () {

    const [item, setITem]= useState({});
   
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc('K7qQmpfzPJfxVPdIulQW');

        miItem.get()
        .then((doc)=>{
            setITem({id: doc.id, ...doc.data() });
        })
        .catch((err)=>{
            alert(err);
        });

    },[]);


    return (
        <>
            <h1> Un Solo Item</h1>
            {JSON.stringify(item)}
        </>
    );

};