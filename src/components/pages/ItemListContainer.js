import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getListaTotal, getListaFiltrada } from '../../utils/firebase/Firebase';
import { useParams } from 'react-router-dom';

function ItemListContainer(){

  const getProducts = async () => {
    if (id==undefined){
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

  const { id } = useParams();

  const [ loading, setLoading ] = useState(false)

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getProducts();
    return
  }, [id])

  return(
    <>
      <h1 style={{fontSize: "3rem", textTransform: "capitalize", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontWeight: "bolder"}} className="text-center">{ id==undefined ? <>Productos</> : id }</h1>

      {loading ? <ItemList data={products}/> : <div className='w-100 d-flex flex-column align-items-center justify-content-center'><div style={{width: '10rem', height: '10rem'}} className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div><span style={{fontSize: '2rem'}}>Cargando...</span></div>}
    </>
  )
}

export default ItemListContainer;