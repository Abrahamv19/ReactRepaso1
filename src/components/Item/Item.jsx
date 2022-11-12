
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
        <div className='card w-50 mt-4'>
            <Link to={`/detail/${product.id}`}>
                    <div className='card-header'>
                    nombre: {product.name}
                    </div>
                    <div className='card-body'>
                    <center>
                    <img src={product.img} className='w-50'/>
                    </center>
                    </div>
                    <div className='card-footer'>
                    descripcion: {product.description}
                    </div>
            </Link>
        </div> 
   
  )
}

export default Item