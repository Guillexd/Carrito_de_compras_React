import React from 'react';
import { Link } from 'react-router-dom';

function Item({ data }){

  return(
    <section style={{width: '500px'}} className="border border-info rounded-3 p-2 d-flex flex-column align-items-center text-center m-3">
      <div className=''>
        <h3>{data.productos.nombre}</h3>
        <Link to={`/item/${data.idProd}`}>
          <img style={{filter: 'brightness(1.1)', mixBlendMode: 'multiply'}} src={data.productos.imagen} alt={data.productos.nombre} width="300px"/><br></br>
        </Link>
        <h4>
          <strong>${data.productos.precio}</strong>
        </h4>
        <Link to={`/item/${data.idProd}`}>
          <button style={{fontSize: '1.3rem'}} type="button" className="btn btn-info">Mirar detalles</button>
        </Link>
      </div>
    </section>
  )
}  

export default Item;