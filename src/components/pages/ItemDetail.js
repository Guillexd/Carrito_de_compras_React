import React from 'react';
import { UsarContextos } from '../../utils/contexts/CartContext'
import ItemCount from './ItemCount';

function ItemDetail({ product, id }){
 
  //Se hace uso del contexto y se importa la función setCarrito; además de la variable carrito
  const { carrito, setCarrito} = UsarContextos();

  //Función que agrega el producto (objeto) a la variable 'carrito' (array)
  const onAdd = (contador, e) => {
    if (carrito.some(obj=>obj.id==id)){
      const prod=carrito.findIndex(el=>el.id==product.idProd)
      carrito[prod].cantidad=contador;
      setCarrito([...carrito]);
    } else {
      const obj={
        nombre: product.producto.nombre,
        id: id, 
        precio: product.producto.precio, 
        stock: product.producto.stock,
        imag: product.producto.imagen,
        cantidad: contador
      }
      setCarrito([...carrito, obj])
    }
    e.target.disabled=true;
    e.target.innerText='Agregado';
  }

    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <section className="text-center">
          <p style={{fontSize: "3rem"}}>Producto: { product.nombre}</p>
        </section>
        <section className="container d-flex flex-column flex-lg-row justify-content-center align-items-center py-5 mt-1">
          <img src={product.producto.imagen} alt={product.producto.nombre} width="320"/>
          <div className="d-flex flex-column align-items-center border border-1 border-info rounded-5 p-3">
            <h2><strong>{product.producto.nombre}</strong></h2>
            <p style={{fontSize: '1.2rem'}}>{product.producto.descripcion}</p>
            <h4><strong>${product.producto.precio}</strong></h4>
            <ItemCount stock={product.producto.stock} onAdd={onAdd}></ItemCount>
          </div>
        </section>
      </div>
    )
}

export default ItemDetail;