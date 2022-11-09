import React from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
      //LLamda a la api para un producto en particular
    //Guardar en un estado el producto el prodcutId
    //Para capturar el parametro Ej. 1 uso useParams (Hook)

    const {productId} = useParams()
    console.log(productId)
  return (
    <div><ItemDetail /></div>

    //Aca debo llamar al useEffect y guardarlo como un estado de prodcuto (productId)
  )
}

export default ItemDetailContainer