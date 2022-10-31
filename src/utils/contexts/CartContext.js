import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addOrder, updateStock } from '../../utils/firebase/Firebase'

//Función para exportar las funciones de contexto
const Contexto = createContext();
export const UsarContextos = () => useContext(Contexto);

function ContextoTareas({children}){

  //Hook para navegar a otra ruta
  const navigate = useNavigate();

  //Hook para guardar el estado de los detalles de producto
  const [carrito, setCarrito]=useState([]);

  //Hook para guardar el estado de la cantidad de los productos
  const [cantidad, setCantidad] = useState(0);

  //Hook para guardar el estado del precio final de los productos
  const [precioFinal, setPrecioFinal] = useState(0);

  //Hook para controlar el estado de los anteriores hooks
  useEffect(() => {
    setCantidad(getCantidadTotal);
    setPrecioFinal(getPrecioFinal);
    return () => {
     
    };
  }, [carrito]);

  //Función que utiliza el método reduce para sumar la cantidad de cada producto y devuelve el total
  const getCantidadTotal = () => {
    const cantidadtotal = carrito.reduce(
      (acum, el) => acum + el.cantidad, 
      0
    )
    return cantidadtotal;
  }

  //Función que utiliza el método reduce para sumar el precio de cada producto y devuelve el total
  const getPrecioFinal = () => {
    const preciofinal = carrito.reduce(
      (acum, el) => acum + (el.cantidad*el.precio), 
      0
    )
    return preciofinal.toFixed(2);
  }

  //Función que utiliza el método filter para filtrar los productos que no sean iguales al especificado en sus parámetros y devuelve el resto de productos
  const removeItem = (id) => {
    const newCarrito = carrito.filter(el=> el.id !== id);
    setCarrito(newCarrito);
  }

  //función que vacía "carrito" y elimina todos los productos almacenados
  const clear = (e) => {
    e.target.disabled=true;
    if (carrito.length){
      setCarrito([]);
    }
  }

  //Función que registra "carrito", "cantidad", "precioFinal" en la colección 'coleccion-firebase' de firebase, los datos de formulario y te redirige a index
  const addOrders = (e, form) => {
    e.preventDefault();
    if(carrito.length){
      const productos=carrito.map(el=>{
        const newStock=el.stock-el.cantidad;
        updateStock(el.id, newStock);
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
