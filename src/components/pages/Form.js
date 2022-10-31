import React, { useState } from 'react';
import { UsarContextos } from '../../utils/contexts/CartContext';

function Form(){

  //Hook para controlar el estado de formulario
  const [form, setForm] = useState({});

  //Función para controlar los input text del formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  //Función para controlar el input checkbox del formulario
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.checked
    })
  }

  //Se hace uso del contexto y se importa las funciones addOrders; además de las variables cantidad y precioFinal
  const { addOrders, cantidad, precioFinal } = UsarContextos();

  return(
    <div className='container mt-5'>
      <h1 style={{fontSize: '4rem'}} className='text-center'>Realizar pedido</h1>
      <form className="row g-3">

        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">Nombres</label>
          <input 
            type="text" 
            className="form-control" 
            id="validationCustom01" 
            name="nombre"
            defaultValue={form.nombre}
            onChange={handleChange}
            required/>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Número de teléfono</label>
          <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">#</span>
            <input 
              type="number" 
              className="form-control" 
              id="validationCustom02" 
              name="numero"
              defaultValue={form.numero}
              onChange={handleChange} 
              required/>
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Correo electrónico</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input 
              type="text" 
              className="form-control" 
              id="validationCustomUsername" 
              aria-describedby="inputGroupPrepend" 
              name="correo"
              defaultValue={form.correo}
              onChange={handleChange}
              required/>
          </div>
        </div>

        <div className="alert alert-dark d-flex flex-column flex-lg-row w-75 justify-content-between align-items-center m-auto text-center mt-3" role="alert">
          <h3 className="alert-heading">Detalles de carrito</h3>
          <h4><strong>Cantidad de productos: {cantidad}</strong></h4>
          <h4><strong>Precio final: {precioFinal}</strong></h4>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              name="verificado"
              defaultValue={form.verificado}
              onChange={handleChecked}
              id="invalidCheck" 
              required/>
            <label className="form-check-label" htmlFor="invalidCheck">
              De acuerdo con los términos y condiciones.
            </label>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={(e)=>addOrders(e, form)}>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Form;