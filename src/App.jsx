import { useState } from 'react'

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import Form from './components/Form/Form'
import { Section } from './components/Section/Section'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import reactLogo from './assets/react.svg'
import Cart from './pages/ItemDetailContainer/Cart'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'

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
/* Las HTTP/S son protocolos de transferencias, la diferecnicon HTTP y HTTPS es la segunda es mas segura */
/* Request via HTTP/S sirven para realizar una solicut a un servidor, definido por URL, Verbo(get:obtener, post:crear, put:actualizar, patch:alterar delete:borrar), parametros: query(parametros para efectuar una busqueda) o url, Body(contenido del post) */
/* Recursos restful Cuando se crea y provee un servicio basado en terminos de recursos respetando convenciones de verbo/metodo hablamos de un diseño arquitectural de tipo  REST, si ademas transferimos javascript o xml  se conoce como  AJAX */
/* Los Headers se usan para definir respuestas soportadas,  requeridas o preferidas, agregar informacion extra, Auth token, cookies,leguaje preferido, lo que quieras en forma de texto  */
/* npm i react-router-dom es un mecanismo integrado de navegacion */

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

  //BrowserRouter me da el contexto para poder usar todas las funciones de la libreria react-router-dom
  //En todos los componentes voy a necesitar usar react-router-dom
  //Routes me va a permitir asociar componentes  con rutas
    <BrowserRouter>
    {/* saco el navbar porque es el unico componente que no va a tener una ruta */}
      <NavBar />
    <Routes>
      {/* Al usar detail/:productId le estoy diciendo que productId es un parametro */}
       {/*  <Form tituloForm= {tituloForm}/> */}
      <Route to path='/' element={<ItemListContainer greeting={saludo} saludar = {saludar} />} />
      <Route to path='/categoria/:categoriaId' element={<ItemListContainer greeting={saludo} saludar = {saludar} />} />
      <Route to path='/detail/:productId' element= {<ItemDetailContainer />}/>
      <Route to path='/cart' element= {<Cart />}/>

      {/*  * significa todos  */}
      {/* <Route path='*' element={<Navigate to='/'/>}/> */}
      <Route path='*' element={<NotFound/>}/>
        
       
       
      

         {/*    <Titulo /> 
                <Titulo /> 
        </ItemListContainer>  */}

       {/*  <Section />
        <Titulo titulo='titulo de App' subtitulo='subtitulo de App'/> */}
    </Routes>
   </BrowserRouter>
)

}

export default App
