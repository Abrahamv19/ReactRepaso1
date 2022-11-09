
//Recordar que dentro de un archivo solo se puede usar export default una vez, para varias funciones dentro de un componente uso export al inicio de cada funcion y hago destructuracion {} en App.jsx

import { HiShoppingCart } from 'react-icons/Hi';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';


const NavBar = () => {

useEffect(() => {
  
  //El setInterval dispara ciertas acciones cada 1000 milisegundos, seria un pooling
  setInterval(() => {}, 1000)

  //Le agregue '' dentro del fetch para corregir un error pero nose si esta bien, antes estaba vacio
  fetch('')
}, [])

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>

          {/* En este caso no funciona el isActive porque no reconoce la clase bg-red. Esto es para dar estilo al boton */}
        {/*   <Link to='/' className={({isActive})=> isActive ? 'bg-red' : ''} >React-Bootstrap</Link> */}
          <Link to='/' >React-Bootstrap</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to='/categoria/remeras' >remeras</Link>
              <Link to='/categoria/gorras' >gorras</Link>
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Carrito</Nav.Link>
              <Link to='/cart'>
              <HiShoppingCart />
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar