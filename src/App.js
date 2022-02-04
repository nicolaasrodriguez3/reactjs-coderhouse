import "./App.css";
import "./SCSS/App.scss";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import "./logo-final-3.png";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./componentes/Categories";
import CartContext from "./componentes/CartContext";
import Cart from "./componentes/Cart";

function App() {
  const arrayDeLinks = ["Home", "Categories", "On Sale"];
  return (
    <BrowserRouter>
      <NavBar nombre={"Online Store"} arrayDeLinks={arrayDeLinks} />

      <Switch>
        <CartContext>
        <Route exact path="/">
          <ItemListContainer saludo={"1970 STORE"}></ItemListContainer>
        </Route>

        <Route  path="/item/:itemId">
        <ItemDetailContainer />
        </Route>

        <Route path="/categories/:categoryId">
          <Categories/>
        </Route>

        
        <Route exact path="/cart">
        <Cart/>
        </Route>

        </CartContext>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
