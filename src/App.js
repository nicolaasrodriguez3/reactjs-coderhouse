import "./App.css";
import "./SCSS/App.scss";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import "./logo-final-3.png";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  const arrayDeLinks = ["Home", "Categories", "On Sale"];
  return (
    <>
      <NavBar nombre={"Online Store"} arrayDeLinks={arrayDeLinks} />
      <ItemListContainer saludo={"1970 STORE"}></ItemListContainer>

      <ItemDetailContainer/>
     
    </>

    
  );
}

export default App;
