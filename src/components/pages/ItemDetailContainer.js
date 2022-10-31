import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getProducto } from '../../utils/firebase/Firebase';
import { useParams, useNavigate } from 'react-router-dom';

function ItemDetailContainer(){

  //Hook para redirigir a otra ruta
  const navigate=useNavigate()

  //Hook para seguir el id variable de la ruta '/item/:id'
  const { id } = useParams();

  //Hook para controlar el estado de la carga de producto
  const [ loading, setLoading ] = useState(false)

  //Se hace uso del contexto y se importa la función setProduct; además de la variable product
  const [product, setProduct] = useState([]);
  
  //Hook para hacer el seguimiento de 'id'
  useEffect(()=>{
    //Se llama a la función de firebase para obtener el producto filtrado
    getProducto(id)
    .then(el=>{
      if (el.data() !== undefined){
        setProduct({
          producto: el.data(),
          idProd: el.ref.id
        });
        setLoading(true);
      }
      else {
        navigate('/');
      }
    })
    return 
  }, [id])
  
  return (
    <>
      {loading ? <ItemDetail product={product} id={id}/> : <div className='w-100 mt-5 d-flex flex-column align-items-center justify-content-center'><div style={{width: '10rem', height: '10rem'}} className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div><span style={{fontSize: '2rem'}}>Cargando...</span></div>}
    </>
  )
}

export default ItemDetailContainer;