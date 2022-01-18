
import './App.css';
import "./SCSS/App.scss"
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import "./logo-final-3.png";
import ItemCount from './componentes/ItemCount';


function App() {

  const arrayDeLinks = ["Home","Categories","On Sale"];
  return (
    <>
    <NavBar nombre={"Online Store"} arrayDeLinks={arrayDeLinks}/>
    <div className='container'><ItemListContainer saludo={"Hola Bienvenido!"}/>
    <ItemCount/>
    
    </div>
    
    </>
  );
}

export default App;
