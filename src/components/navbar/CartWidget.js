import React from 'react';
import { UsarContextos } from '../../utils/contexts/CartContext'
import { Link } from 'react-router-dom';

export function CartWidget(){
  const { cantidad } = UsarContextos();
    return (
      <>
        <div className="position-relative mx-lg-5">
          <Link to={"/carrito"} className="text-decoration-none">
            <h4 style={{color: 'black'}} className="position-absolute ms-5">{cantidad}</h4>
            <img src={require("../../utils/images/carrito.png")} alt="Guille's Market logo" height="48px"/>
          </Link>
        </div>
      </>
    )
}