import './App.css';
import NavBar from './components/navbar/NavBar';
import NotFound from './components/pages/NotFound';
import ItemListContainer from './components/pages/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import ContextoTareas from './utils/contexts/CartContext';
import CartContainer from './components/pages/CartContainer';
import Form from './components/pages/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //Controlador para la navegación
    <Router>
      {/* Alcance del contexto provider*/}
      <ContextoTareas>
        {/* Componente presentacional*/}
        <NavBar/>
        <Routes> 
          {/* Rutas para la navegación */}
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/categorias/:id" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/carrito" element={<CartContainer/>} />
          <Route exact path="/form" element={<Form/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ContextoTareas>
    </Router>
  );
}

export default App;
