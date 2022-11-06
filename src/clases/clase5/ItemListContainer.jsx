import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// Entre retorno y cabecera puedo escribir JS nativo
const ItemListContainer = (obj) => {
    //console.log(obj);
    //Voy a hacer un destructuring de un array, se debio haber escrito setContador no guardarEnContador
    const [contador, guardarEnContador] = useState(0)
    const [bool, setBool] = useState(true)



   /*  console.log(array[0]);
    console.log(array[1]); */
   
    /* let count = 0 */
    const sumar = () => {

    /*     count ++ // count = count +1 - count+= 1
        console.log(count); */
        guardarEnContador(contador + 1)
    }
    const cambiarEstado = () => {
      setBool(!bool)
    }
//useEffect salta este paso, para evitar tareas pesadas y asincronicas
    useEffect(() => {
      console.log('Se ejecuta siempre por cada render - se ejecuta 1');

      /* console.log('add event listener'); */

  /*     return () => {
        console.log('limpieza - desmontado - remove event listener'); 
      } */
    })

// Al ponerle un [] array de dependencia le dice al useEffect que solo se va a ejecutar solo en el primer render
    useEffect(() => {
      console.log('tareas pesadas sincronicas y asincronicas - llamada a Api - se ejecuta 2');

      /* console.log('add event listener'); */

  /*     return () => {
        console.log('limpieza - desmontado - remove event listener'); 
      } */
    }, [])

    // Agrego tercer useEffect 
    useEffect(() => {
      console.log('cambio de estado de bool o de contador- se ejecuta 3');

      /* console.log('add event listener'); */

  /*     return () => {
        console.log('limpieza - desmontado - remove event listener'); 
      } */
    }, [bool, contador]) 

   /*  setTimeout(() => {
        guardarEnContador(contador + 1)
    }, 1000) */

    console.log('ItemListContainer - se ejecuta 4'); 

    //Voy a simular tarea pesada y sincronica para bloquear el rendering
   /*  alert('bloqueando el rendering');  */

   //Asincronico. Efecto secundario: Algo que pasa fuera de mi funcion
   /*  console.log('tareas asincronicas Api'); */

  return (
    <div>
        {/* {obj.greeting} */}
       {/*  {count} */}

       {contador}

        {/* {obj.children [1]} */}
       {/*  <button onClick={obj.saludar}>Click</button> */}

        <button onClick={sumar}>+</button>
        <button onClick={cambiarEstado}> Cambiar estado </button>
        </div>
  )
}

export default ItemListContainer