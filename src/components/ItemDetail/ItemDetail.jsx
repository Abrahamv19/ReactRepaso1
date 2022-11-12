import React from 'react'
import { Card } from 'react-bootstrap'
import Contador from '../Contador/contador'

const ItemDetail = ({ product }) => {
  const onAdd = (cantidad) => {
    console.log(cantidad)
  }
 return (
  <center>
    <div className='row'> 
    <div className='col'>
<img src={product.img} className='w-25' />
<p>Categoria: {product.description}</p>
<p>Precio: {product.precio}</p>
<p>Stock: {product.stock}</p>
    </div>
   <Contador stock={10} initial={1} onAdd={onAdd}/>
    </div>
  </center>
  )
}

export default ItemDetail