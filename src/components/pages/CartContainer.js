import React from 'react';
import Cart from './Cart';
import { UsarContextos } from '../../utils/contexts/CartContext';
import { useNavigate} from 'react-router-dom';

function CartContainer(){

  //Se usa el contexto y se importa la función clear; además de las variables carrito, cantidad y precioFinal 
  const { carrito, cantidad, precioFinal, clear } = UsarContextos();
  
  //Hook para navegar a otra ruta
  const navigate = useNavigate();

  //Función que redirige a la ruta /form si la variable 'carrito' está con productos
  const formulario = (e) => {
    carrito.length ? navigate('/form') : e.target.disabled=true;
  }

  return(
    <>
      <div className="container d-flex flex-column align-items-center">
        {carrito.map(props => <Cart props={props} key={props.id}/>)}
      </div>
  
      <div className="alert alert-success d-flex flex-column flex-lg-row w-75 justify-content-between align-items-center m-auto text-center mt-3" role="alert">
        <h3 className="alert-heading">Detalles de carrito</h3>
        <h4><strong>Cantidad de productos: {cantidad}</strong></h4>
        <h4><strong>Precio final: {precioFinal}</strong></h4>
        <button style={{fontSize: '1.2rem'}} type="button" className="btn btn-danger" onClick={formulario}>Finalizar compra</button>
      </div>
      <div className="container d-flex flex-column align-items-center mt-3">
        <button style={{fontSize: '1.2rem'}} type="button" className="btn btn-danger" onClick={(e)=>clear(e)}>Vaciar Carrito</button>
      </div>
    </>
  )
}

export default CartContainer;