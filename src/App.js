
import './App.css';
import NavBar from './componentes/NavBar';
import Bienvenida from './componentes/Bienvenida';


function App() {

  const arrayDeLinks = ["Home","Categories","On Sale"];
  return (
    <>
    <NavBar nombre={"Online Store"} arrayDeLinks={arrayDeLinks}/>
    <div className='container'><Bienvenida saludo={"Hola Bienvenido!"}/></div>
    
    </>
  );
}

export default App;
