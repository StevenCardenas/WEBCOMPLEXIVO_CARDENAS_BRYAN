import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componentes/Nav.js'
import Inmuebles from './pages/inmuebles/inmueble.js';
import CrearInmueble from './pages/inmuebles/crearInmueble.js';
import UpdateInmueble from './pages/inmuebles/updateInmueble.js';
import Home from './pages/Home.js';
//Creamos rutas basadas en componentes para mostrar el aplicativo con un Nav siempre presente.
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />   
          <Route exact path='/inmuebles' element={<Inmuebles />} />    
          <Route exact path='/createInmueble' element={<CrearInmueble />} />  
          <Route exact path='/editInmueble/:id_inmueble' element={<UpdateInmueble />} /> 



        </Routes>
      </Router>

    </div>
  );
}

export default App;
