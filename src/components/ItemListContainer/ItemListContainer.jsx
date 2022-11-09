import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { gFetch } from '../../utilis/gFetch'
import {Link, useParams} from 'react-router-dom'

// se renderiza un componente, cuando hay, cambio de estado, cambio en las props o un evento
// A una simulacion se le conoce como mock
//Un fetch es una promesa
//Voy a crear mi propio fetch que recibe una callback con sus parametros y funciones, resolve y reject (aceptada y rechazada)
//Para capturar los resultados de una promesa, uso un then.
//callback es una funcion anonima
//.then(llama resultados de la promesa) y .catch (captura el error) son metodos de una promesa (callbacks)
//.finally otro metodo que se ejecuta al despues de terminar las anteriores (al final) para saber cuando terminaron los completados y los rechazados 
//Las funciones callback nunca seran llamadas previo a la terminacion de del actual bucle de eventos de js
//Las funciones  callback añadidas con .then seran llamads despues del exito ofracaso de la operacion
//El metodo map nos permite generar un nuevo array tomando de base otro array y utilizando una funcion transformadora, me sirve para hacer un render de una coleccion de objetos en react
//El map tiene un retorno a diferencia del for each
//Las cors (intercambio de recursos de origen cruzado) es una caraterisitica de seguridad del navegador que restringe solicitudes HTTP de origen cruzado (error/problema). El error se genera por el envio de de un request option llamado pre-flight (antes de mi cosntulta(fetch)), en dicho request se le pregunta al dominio si acepta el request de un dominio distinto (cross), si no esta configurado para aceptar se envia un error. Estos headers se activan ante un verbo OPTION, por comodidad se pueden activar para otros verbos
//Los mejores servicios ofrecen integraciones mediante Api rest usando https.
//Las Apis agregan funcionalidades a mi aplicacion (clima, mercado pago, convertidor de monedas, hora, etc.. )
// Las Apis me las traigo con Fetch o Axios

/* let obj = [{nombre: 'Hugo',apellido: 'Vasquez' }]

const task = new Promise((resuelto, rechazada) => { */
 //Acciones
/* resuelto(1) */

/* resuelto(obj) */
/* rechazada('promesa rechazada') */
/* }) */

/* const ItemListContainer = (obj) => { */

  //.then()
 /*  task
  .then(resp => { console.log(resp) */
/*   task
  .then(resp => console.log(resp))
  .catch(err => console.log(err))
  .finally(() => console.log('Siempre')) */

const ItemListContainer = (obj) => {


  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(true)
  const [bool, setBool]= useState(true)
  const {categoriaId} = useParams() 
  //Esto es una tarea asincronica por lo que la debo asociar a un useEffect y [] para que se ejecute solo una vez porque hay una llamada a una api. Con el useEffect me llama gFetch una soloa vez despues del return, es decir, despues que se monto el componente

/* const option = {
    method: 'GET',
    headers: {
        'Content Type': 'application/json'
    } */
    //con este codigo convierto un objeto js a un json
/*     body: JSON.stringify([]) 
}  */

  //Como usar un fecth
//fetch(url, option)

//verr video clase 4 T4:03
/* const url = 'https://pokeapi.co/api/v2/ability/?limit=10&offset=20'
fetch(url) */
//fetch es una promesa capturo el resultado con un .then. Usando resp.json le estoy diciendo que me transorme la promesa a un objeto js
/* .then(resp => resp.json())
.then(data => console.log(data)) */



  useEffect(() => {
    if (categoriaId) {
        gFetch()
        .then(resp => setProducts(resp.filter(prod => prod.description === categoriaId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }else{
    gFetch()
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
      
    }
  
  }, [categoriaId])

//puedo agregar .finally(() => console.log('Siempre')) despues de .finally(() => setLoading(false)) para confirmar que esta funcionando el gFetch
    /* throw new Error('Error en esta linea') */
    /* console.log(resp) */
   /*  return resp * 20  */
    /* }) */ /* , err => console.log(err)) */ // asi se captura la funcion rechazada de mi promesa pero no captura new Error

  //El catch captura todos los errores, es mejor usar .catch 
 /*  .catch(err => console.log(err)) */

  //debo hacer otro .then para mostrar el resultado resp * 20
  /* .then(data => data + 5) */
  //En este caso no tendria que poner el return porque () => es una funcion callback y el retorno esta implicito
  /* .then(respuesta => console.log(respuesta)) */

/*   const cambiarEstado = () => {
    setBool(!bool)
    
  } */
 /*  console.log(products); */
  console.log(categoriaId)

  //podria tener un header en el primer div, un body en el segundo div, y asi...
  return (
    loading 
         ?  <h2>Cargando...</h2>
         :
            <div>
              <center>
              <h1>ItemListContainer</h1>
             {/*  <button onClick={cambiarEstado}>cambiar estado</button> */}
                 
                  {products.map( obj => <div key={obj.id} className='card w-50 mt-4'>
                          <Link to={`/detail/${obj.id}`}>
                                <div className='card-header'>
                          nombre: {obj.name}
                          </div>
                          <div className='card-body'>
                            <center>
                            <img src={obj.img} className='w-50'/>
                            </center>
                          </div>
                          <div className='card-footer'>
                          descripcion: {obj.description}
                          </div>
                          </Link>
                    
                  
                    </div>
                
                )
                } 
            </center>
            </div>
  )
}

export default ItemListContainer