import { useState } from 'react'

import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import Form from './components/Form/Form'
import { Section } from './components/Section/Section'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import reactLogo from './assets/react.svg'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/* Un componente es una funcion que empieza con mayuscula y retorna un jsx */
/* Las props son parametros o propiedades de un objeto o arreglo, props es un objeto con titulo y subtitulo, una forma de pasar informacion*/
/* <Menu pagina1='' pagina2=''/> es un componenete equivalente a Menu(pagina1, pagina2...) */
/* Titulo es child component de App, las props es la manera como el componente App pasa parametros al componente child titulo */
/* Los compponenentes presentacionales solo muestran datos Ejm Titulo, Form, Section */
/* Los componentes contenedores encapsulan otros componentes y le pasan las propiedades, tambien modifican el estado (state components), tienen varias variables  Ejm App, en estos componentes estan las llamdas a las Apis*/
/* Children (es una prop predefinida en react), es una forma de crear props (parametros de un objeto) */
/* Componente funcional el que muestra, componente contenedor el que tiene muchos componentes */
/* para pasar funcion 2 formas, saludar seria paso por referencia y saludar() seria paso por ejecucion */
/* Toda funcion y constante tienen un ciclo de vida */
/* Con {} escapo de jsx */
/* OnClick es un evento */
/* Como se llaman las funciones pasadas por parametros, R/ Callback */
/* Un componente es una funcion */
/* El destructuring es una caracteristica de js, da una manera de extraer datos de objetos o arreglos y asignarlos a variables */
/* Cuando agrego un componente dentro de otro <Form> <Titulo /> </Form> titulo de convierte en un children */
/* Los eventos ejm. onClick, me disparan una nueva ejecucion del componente donde se esta ejecutando, se soluciona con los Hooks de react */
/* Los Hooks son funciones de react, para usarlas debo primero importarlas, todos los Hooks empiezan con un useState (gancho), nos va a guardar el valor de count en otro lado, para no perderlo*/
/* Cuando una funcion se vuelve a ejecutar se llama rerender o nuevo render, cuando se ejecuta un evento o cambia el valor de un estado o hay un cambio en la props, se produce un rerender */
/* Ciclo de vida (se ejecuta, se actualiza y muere), es parte de la anatomia de un componente: En React hay acciones que necesariamente se deben realizar en el momento correcto de un ciclo */
/* Reglas basicas: no bloquear rendering con tareas pesadas y sincronicas. Ejecutar tareas asincronicas con efectos secundarios luego del montaje (mount) */
/* Tareas asincronicas: son las promesas o las llamadas a las Apis, los Fetch (llamadas a un Api) */
/* 3 clasificaciones del estado en el ciclo de vida: El montaje (primera vez que un componente se genera), La actualizacion (cuando se actualiza el componente), Desmontaje (Se elimina componente del DOM) */
/* JS promise .isFulfilled .isPending .isRejected es un api (funcion) de js para crear y ejecutar operaciones */
/* Una promesa es asincronica o sincronico depende de la tarea a realizar  y es un objeto que permite representar y seguir el ciclo de vida de una tarea/operacion (funcion) */

function App() {
/*   let tituloApp = 'Hola soy titulo de app'
  let subtituloApp = 'Hola soy subtitulo de app'
  let tituloForm = 'Hola soy titulo de form' */

  console.log('App');

  //Estan las llamadas a las Apis

  const saludo = 'saludando' // estado

  const saludar = () => {
    console.log('hola soy app');
  }

return (
    <div>
    
        <NavBar />
       {/*  <Form tituloForm= {tituloForm}/> */}

        <ItemListContainer greeting={saludo} saludar = {saludar} />

         {/*    <Titulo /> 
                <Titulo /> 
        </ItemListContainer>  */}

       {/*  <Section />
        <Titulo titulo='titulo de App' subtitulo='subtitulo de App'/> */}

   </div>
)

}

export default App
