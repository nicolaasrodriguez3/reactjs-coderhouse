import React, {useContext, useEffect, useState}  from "react";


export default function Loader (){


    return(
        <>
        <div className="loader">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        </>
    );
}