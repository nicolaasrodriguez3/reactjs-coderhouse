import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

export default function Categories () {

    const {categoryId} =useParams();

    useEffect(()=>{

        console.log(categoryId);

    },[categoryId]);

    return(
        <>
         Estoy en la categoria {categoryId}
        </>
    );


}