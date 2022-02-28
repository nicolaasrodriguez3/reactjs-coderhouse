# Ecommerce with React Js

Este repositorio fue creado con el objetivo de ser el proyecto final del curso de React JS de Coderhouse. 

El proyecto consiste en un Ecommerce de indumentaria y accesorios con tematica retro.

***Este proyecto es solo una simulación de una tienda con un fin educativo, no tiene una fin comercial real* . 


## Technologies 🌐 &nbsp; 

  ![HTML5](https://img.shields.io/badge/-Firebase-333333?style=flat&logo=firebase)

  ![NPM](https://img.shields.io/badge/-npm-333333?style=flat&logo=npm)

  ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)

  ![Bootstrap](https://img.shields.io/badge/-Bootstrap-333333?style=flat&logo=bootstrap&logoColor=563D7C)

  ![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)

  ![Git](https://img.shields.io/badge/-Git-333333?style=flat&logo=git)

   ![Sass](https://img.shields.io/badge/-Sass-333333?style=flat&logo=sass)



## Features

- Una vez iniciado el proyecto se mostrara la pagina de **Home** con todos los productos cargados en la base de datos. 

- Filtro por Categorías: En la navbar superior podremos encontrar dos categorías que nos permitirán filtrar los productos. Las categorías existentes son **Remeras** y **Accesorios**.

- Ver detalle del producto: Haciendo un click sobre la imagen del producto , se renderizarán en pantalla los detalles del mismo. **Incluyendo: imagen, descripción, stock disponible y los botones de agregar o quitar mas unidades y el botón de agregar al carrito de compras**.

- Agregar productos al carrito: junto con los detalles del producto se cargará un botón con la opcion de agregar ese producto al carrito. 

  Para que dicho botón funcione se debe haber seleccionado como minimo 1 
  producto.

  Una vez agregado al carrito se renderizarán dos botones en pantalla, uno para volver a la **Home** y otro para terminar con la compra que nos llevará al **carrito**.

- Carrito de compras: existen dos maneras de acceder al carrito: la primera es agregando un producto y haciendo click en el boton de **Terminar compra**. La segunda es haciendo click en el icono de carrito visible en la navbar  *//este icono solo es visible una vez agregado al menos 1 producto al carrito//*

   - El carrito nos permitirá conocer el **precio total** de la compra y los precios **sub totales** por item. 

  - **Función de eliminar items**: haciendo click en el botón en forma de cruz se podrán eliminar items del carrito.

  - **Función de Vaciar Carrito**: haciendo click en el botón en forma de cruz se podran **eliminar TODOS los items** del carrito.

- Finalizar la  compra: Haz click en el botón finalizar compra, llena los datos del formulario y se te generará un numero de orden. 


## How to Set up 
- Clonar este respositorio
- Una vez clonado ejecutar los siguientes comandos en la terminal:
```bash
npm install
npm start 
```
- Una vez hecho esto , el proyecto debería estar corriendo en el navegador

### Tools used to build it 

- **CreatReactApp** : se considero esta como la forma mas simple de crear una app en react para los requirimientos del programa del curso. 

- **ReactRouter**: se considero como el mas practico y mas usado y para estandarizar un router para todos los estudiantes del curso. (versión: 5.2.0)

- **Firebase's FireStore**: se utilizo el servicio de Firebase ya que es una manera sencilla de simular un Backend, ya que el uso de servidores y bases de datos no esta contemplado en el programa del curso. (versión: 8.8.0) 

 - **Sass**: para los estilos de la app se utilizo el pre procesador de css, Sass. Ya que Sass nos permite modularizar estilos por componentes de una forma mas practica y entendible. (versión : 1.48.0)


Made By Nicolas Rodriguez - 2022