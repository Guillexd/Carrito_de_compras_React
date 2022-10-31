import React, { useState } from 'react';

function ItemCount({ stock, onAdd }){

  const [contador, setContador] = useState(1);

  const aumentarProducto = (e) =>{
    setContador(!(contador>=stock) ? contador + 1 : stock);
    habilitarBtn(e);
  }

  const disminuirProducto = (e) =>{
    setContador( contador>1 ? contador - 1: 1);
    habilitarBtn(e);
  }

  const habilitarBtn = (e) => {
    e.target.closest("div").nextElementSibling.firstElementChild.disabled=false;
    e.target.closest("div").nextElementSibling.firstElementChild.innerText='Agregar';
  }

  

  return(
    <div className='w-25'>
      <div className='d-flex justify-content-evenly'>
        <button style={{fontSize: '1.3rem'}} onClick={disminuirProducto} type="button" className="btn btn-secondary rounded-circle px-3">-</button>
        <span style={{fontSize: '1.5rem'}}>{contador}</span>
        <button style={{fontSize: '1.3rem'}} onClick={aumentarProducto} type="button" className="btn btn-secondary rounded-circle px-3">+</button>
      </div>
      <div className='mt-3'>
        <button id='onAdd' style={{fontSize: '1.3rem'}} onClick={(e)=>onAdd(contador, e)} type="button" className="btn btn-success w-100 mx-1">Agregar</button>  
      </div>
    </div>
  )
}

export default ItemCount;
