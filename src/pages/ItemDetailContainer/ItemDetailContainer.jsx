import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utilis/gFetch'


const ItemDetailContainer = () => {
      //LLamda a la api para un producto en particular
    //Guardar en un estado el producto el prodcutId
    //Para capturar el parametro Ej. 1 uso useParams (Hook)

    const [product, setProduct] = useState({})
    const [loading, setLoading]= useState(true)
    const {productId} = useParams()

    //El useEffect me permite llamar a las Api o al gfetch que es un mock en este caso
    useEffect(()=> {
      gFetch(productId)
      .then(resp=> setProduct(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    },[] )
    console.log(product)

  return (
    loading 
    ?  <h2>Cargando...</h2>
    :
    <div><ItemDetail product={product}/></div>

    //Aca debo llamar al useEffect y guardarlo como un estado de prodcuto (productId)
  )
}

export default ItemDetailContainer