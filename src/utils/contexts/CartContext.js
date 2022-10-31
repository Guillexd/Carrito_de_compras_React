import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../utils/firebase/Firebase'

const Contexto = createContext();
export const UsarContextos = () => useContext(Contexto);

function ContextoTareas({children}){

  const navigate = useNavigate();
  const [carrito, setCarrito]=useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);

  useEffect(() => {
    setCantidad(getCantidadTotal);
    setPrecioFinal(getPrecioFinal);
    return () => {
     
    };
  }, [carrito]);

  const getCantidadTotal = () => {
    const cantidadtotal = carrito.reduce(
      (acum, el) => acum + el.cantidad, 
      0
    )
    return cantidadtotal;
  }

  const getPrecioFinal = () => {
    const preciofinal = carrito.reduce(
      (acum, el) => acum + (el.cantidad*el.precio), 
      0
    )
    return preciofinal.toFixed(2);
  }

  const removeItem = (id) => {
    const newCarrito = carrito.filter(el=> el.id !== id);
    setCarrito(newCarrito);
  }

  const clear = (e) => {
    e.target.disabled=true;
    if (carrito.length){
      setCarrito([]);
    }
  }

  const addOrders = (e, form) => {
    e.preventDefault();
    if(carrito.length){
      const productos=carrito.map(el=>{
        return{
          nombre: el.nombre,
          cantidad: el.cantidad,
          id: el.id,
          precio: el.precio,
          precioTotal: (el.precio*el.cantidad).toFixed(2)
        }
      })
      const obj={
        buyer: {
          nombre: form.nombre,
          numero: form.numero,
          correo: form.correo
        },
        productos: productos,
        cantidad: cantidad,
        fecha: new Date().toDateString().toString(),
        precioFinal: precioFinal
      }
      console.log(productos);
      addOrder(obj);
      navigate('/');
    } 
  }

  return (
    <Contexto.Provider value={{carrito, cantidad, precioFinal, setCarrito, removeItem, clear, addOrders}}>
      {children}
    </Contexto.Provider>   
  )
}

export default ContextoTareas;
