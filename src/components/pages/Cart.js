import React from 'react';
import { UsarContextos } from '../../utils/contexts/CartContext'

function Cart({props}){
  
  //Se usa el contexto y se importa la función removeItem
  const { removeItem } = UsarContextos();

  return(
    <section className="d-flex flex-column flex-md-row align-items-center justify-content-around w-75 my-1 border border-3 rounded-end">
        <img src={props.imag} alt={props.titulo} width="150"/>
        <div className="d-flex flex-column text-center">
          <h3>Nombre: <strong>{props.nombre}</strong></h3>
          <h4>Cantidad: <strong>{props.cantidad}</strong></h4>
          <h4>Precio: <strong>${(props.precio*props.cantidad).toFixed(2)}</strong></h4>
        </div>
        <button style={{fontSize: '1.2rem'}} type="button" className="btn btn-danger" onClick={()=>removeItem(props.id)}>Quitar</button>
      </section>
  )
}

export default Cart;