import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
  const {itemId} =useParams();

  const catalogoDeProductos = [
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
      nombre: "Remera Wiscosin",
      stock: 8,
      precio: 3500,
      id: "003",
      categoria: "Remeras",
      foto: "https://i.pinimg.com/564x/ba/93/14/ba9314318a67a86aa1bd2b935ea302d3.jpg",
    },

    {
      nombre: "Gorra Torrance",
      stock: 9,
      precio: 2800,
      id: "004",
      categoria: "Accesorios",
      foto: "https://cdn.shopify.com/s/files/1/0009/1180/2420/products/ScreenShot2021-01-18at13.37.04_1024x1024@2x.png?v=1610977113",
    },

    {
      nombre: "Gorra Overlook",
      stock: 16,
      precio: 2800,
      id: "005",
      categoria: "Accesorios",
      foto: "https://i.pinimg.com/564x/a0/6c/31/a06c31d57afb6f0159d5355f53361a8b.jpg",
    },

    {
      nombre: "Gorra Silver Creek",
      stock: 11,
      id: "006",
      precio: 2800,
      categoria: "Accesorios",
      foto: "https://www.fatbuddhastore.com/images/speed-stix-trucker-hat-red-p29093-100151_medium.jpg",
    },
  ];

  const productosEnStock = new Promise((resolve, reject) => {
    
    
    setTimeout(() => {
      resolve(catalogoDeProductos);
    }, 1000);
  });

  useEffect(() => {
   

    /* setProducto(catalogoDeProductos.filter((item) => item.id===itemId)[0]); */

    productosEnStock
      .then((res) => {
        setLlegoLaPromesa(true);
        setProducto(res.filter((item) => item.id==itemId)[0]);
        
      })

      .catch(() => {
        alert("ERROR!");
      });


  }, []);

  return (
    <>
      {llegoLaPromesa ? (
        <>
          <ItemDetail producto={producto} />
        </>
      ) : (
        <>
        Cargando..
        </>
      )}
    </>
  );
}
