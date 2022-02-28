import "./App.css";
import "./SCSS/App.scss";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./componentes/Categories";
import CartContext from "./componentes/CartContext";
import Cart from "./componentes/Cart";
import TestFirebase from "./componentes/TestFirebase";
import TestFirebase2 from "./componentes/TestFirebase2";

function App() {
  const arrayDeLinks = ["Home", "Categories", "On Sale"];
  return (
    <BrowserRouter>
     <CartContext>
      <NavBar nombre={"Online Store"} arrayDeLinks={arrayDeLinks} />

      <Switch>
        
        <Route exact path="/">
          <ItemListContainer saludo={"1970 STORE"}></ItemListContainer>
         
        </Route>

        <Route  path="/item/:itemId">
        <ItemDetailContainer />
        </Route>

        <Route path="/categories/:categoryId">
        <ItemListContainer/>
        </Route>

        
        <Route exact path="/cart">
        <Cart/>
        </Route>

        
      </Switch>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
