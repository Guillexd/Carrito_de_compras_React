import React, { useState, useEffect } from 'react';
import Item from './Item';

function ItemList({ data }){
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {data.map((prod) => <Item data={prod} key={prod.idProd}/>)}
    </div>
  )
}
export default ItemList;