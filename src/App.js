
import './App.css';
import "./SCSS/App.scss"
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import "./logo-final-3.png";



function App() {

  const arrayDeLinks = ["Home","Categories","On Sale"];
  return (
    <>
    <NavBar nombre={"Online Store"} arrayDeLinks={arrayDeLinks}/>
   <ItemListContainer  saludo={" Bienvenido!"}></ItemListContainer>
    
    </>
  );
}

export default App;
