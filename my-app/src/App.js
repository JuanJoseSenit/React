import React from 'react';

import './App.scss';
import HolaMundo from './Components/HolaMundo';
import Boton from './Components/props/Boton';
import Lista from './Components/props/Lista';
import Contador from './Components/Contador/Contador';
import Lista2 from './Components/outputs/Lista2';
import Formulario from './Components/Formulario/Formulario';
import Contador2 from './Components/Contador/Contador2';
import FormularioAnimal from './Components/FormularioImagenes/FormularioAnimal';
import FormProfesional from './Components/FormProfesionales/FormProfesional';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from 'react-router-dom';



function App() {                      //solo puede retornar un padre, es decir un div o lo que sea, y dentro de él todos los
                                     //hermanos que quieras
  return (
    <div className="App">
      <div>cabecera</div>
      <header className="App-header">
        <Router>
          <Link to="/HolaMundo">Hondo</Link>
          <Link to="/Formulario">Formulario</Link>
          <Link to="/Boton">Botón</Link>
          <Link to="/Lista">Lista</Link>
          <Link to="/Contador">Contador</Link>
          <Link to="/Lista2">Lista2</Link>
          <Link to="/Contador2">Contador2</Link>
          <Link to="/FormularioAnimal">Formulario animal</Link>
          <Link to="/FormProfesional"><span className='icon-star'></span>Formulario Profesional</Link>
          

          <Switch>
            <Route path="/HolaMundo"><HolaMundo></HolaMundo></Route>
            <Route path="/Formulario"><Formulario></Formulario></Route>
            <Route path="/Boton"><Boton></Boton></Route>
            <Route path="/Lista"><Lista></Lista></Route>
            <Route path="/Contador"><Contador></Contador></Route>
            <Route path="/Lista2"><Lista2></Lista2></Route>
            <Route path="/Contador2/:id"><Contador2 ></Contador2></Route>
            <Redirect from ='/Contador2' to ='/Contador2/0'/>
            <Route path="/FormularioAnimal"><FormularioAnimal></FormularioAnimal></Route>
            <Route path="/FormProfesional"><FormProfesional></FormProfesional></Route>
            
          </Switch>
        </Router>

      </header>
      <footer>
        juanjo
      </footer>
    </div>
    
    
  );
}

export default App;
