import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getListaTotal, getListaFiltrada } from '../../utils/firebase/Firebase';
import { useParams } from 'react-router-dom';

function ItemListContainer(){

  //Función para obtener la lista de productos de la  base de datos 'coleccion-firebase'
  const getProducts = async () => {
    if (id==undefined){
      //Se llama a la función de firebase para obtener el listado total de productos
      await getListaTotal()
        .then(value=>{
          setLoading(true);
          setProducts(value.docs.map((value)=> {
            return {
              productos: value.data(),
              idProd: value.ref.id
            }
          }));
        })
    } else {
      //Se llama a la función de firebase para obtener el listado filtrado de productos
      await getListaFiltrada(["categoryId", "==", id])
        .then(value=>{
          setLoading(true);
          setProducts(value.docs.map((value)=> {
            return {
              productos: value.data(),
              idProd: value.ref.id
            }
          }));
        })
    }
  }

  //Hook para seguir el id variable de la ruta '/categorias/:id'
  const { id } = useParams();

  //Hook para hacer el seguimiento del estado de carga de la carga del listado de productos
  const [ loading, setLoading ] = useState(false)

  //Hook para hacer el seguimiento del estado de productos
  const [products, setProducts] = useState([]);

  //Hook para hacer el seguimiento de 'id'
  useEffect(()=>{
    //Se llama a la función para obtener un listado de productos
    getProducts();
    return
  }, [id])

  return(
    <>
      <h1 style={{fontSize: "3rem", textTransform: "capitalize", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontWeight: "bolder"}} className="text-center">
        { id==undefined ? <>Productos</> : id }
      </h1>

      {loading ? <ItemList data={products}/> : <div className='w-100 d-flex flex-column align-items-center justify-content-center'><div style={{width: '10rem', height: '10rem'}} className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div><span style={{fontSize: '2rem'}}>Cargando...</span></div>}
    </>
  )
}

export default ItemListContainer;