import react, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(producto);
    }, 3000);
  });

  useEffect(() => {
    const arrayDeProductos = [
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
        nombre: "Remera 4",
        stock: 8,
        precio: 3500,
        id: "003",
        categoria: "Remeras",
        foto: "",
      },

      {
        nombre: "Gorra 1",
        stock: 9,
        precio: 2800,
        id: "004",
        categoria: "Accesorios",
        foto: "",
      },

      {
        nombre: "Gorra 2",
        stock: 16,
        precio: 2800,
        id: "005",
        categoria: "Accesorios",
        foto: "",
      },

      {
        nombre: "Gorra 3",
        stock: 11,
        id: "006",
        precio: 2800,
        categoria: "Accesorios",
        foto: "",
      },
    ];

    setProducto(arrayDeProductos.filter((item) => item.id)[0]);

    productosEnStock
      .then((res) => {
        setLlegoLaPromesa(true);
        setProducto(res);
      })

      .catch(() => {
        alert("ha ocurrido un error");
      });
  });

  return (
    <>
      {llegoLaPromesa ? (
        <>
          <ItemDetail producto={producto} />
        </>
      ) : (
        <>
          {" "}
          <p className="pantalla-carga">cargando producto</p>
        </>
      )}
    </>
  );
}
