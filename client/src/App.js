import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import AgregarUsuario from './components/AgregarUsuario';
import EditarUsuario from './components/EditarUsuario';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ListaUsuarios />}></Route>
          <Route exact path='/agregarUsuario' element={<AgregarUsuario />}></Route>
          <Route exact path='/editarUsuario/:id' element={<EditarUsuario />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
