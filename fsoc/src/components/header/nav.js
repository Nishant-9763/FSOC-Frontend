import React from 'react';
import './nav.css'
import { Navbar, Nav, NavDropdown, NavItem, Container } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import {successToast,errorToast} from '../alert'

function Header() {

  let navigate = useNavigate()
  let user = localStorage.getItem('user_name')
  let userId = localStorage.getItem('user_id')
  let token = localStorage.getItem('group2project-5')


  function logOut(){
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
    
    <Navbar   bg="black" expand="md" collapseOnSelect  variant="dark">
      <Container>
        <Navbar.Brand onClick={()=>successToast("Welcome to AI world !!!")} >AI Generated Images</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             
          </Nav>

          <Nav >
           
            { token ?  "" :  <Nav.Link > <Link to="/" className="nav-link">Login</Link></Nav.Link> }
            { token ?  "" :  <Nav.Link > <Link to="/register" className="nav-link">Register</Link></Nav.Link> }
            { token ?   <Nav.Link > <Link to={`/image/generateImage/${userId}`} className="nav-link">Create Image</Link></Nav.Link> : "" }
            { token ?   <Nav.Link > <Link to={`/image/getImage/${userId}`} className="nav-link">Get Images</Link></Nav.Link>  :  "" }
            { token ?   <Nav.Link onClick={logOut} ><Link to="/" className="nav-link">Logout</Link> </Nav.Link>  :  "" }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>

);
}

export default Header;













































































{/* <Navbar bg="black" expand="md">
  <Navbar.Brand    href={`/image/getImage/${userId}`}   onClick={()=>alert("Wlecome to AI world !!!")} >AI Generated Images</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      { token ? 
      <Nav.Item>
        <Link to={`/image/getImage/${userId}`} className="nav-link">See Images</Link>
      </Nav.Item>      : "" }   

      { token ?  
      <Nav.Item>
        <Link to={`/image/generateImage/${userId}`} className="nav-link">Create Image</Link>
      </Nav.Item>  : "" } 

      { token ?  "" : 
      <Nav.Item>
        <Link to="/register" className="nav-link">Register</Link>
      </Nav.Item> }
      
      { token ?  "" : 
      <Nav.Item>
        <Link to="/" className="nav-link">Login</Link>
      </Nav.Item> }

    </Nav>
    <Nav>
    <Nav.Item className="dummy">
        <Link to="/" className="nav-link">dummy</Link>
      </Nav.Item> 
    </Nav>
  </Navbar.Collapse>
  { token ?  
  <Nav>
  <NavDropdown title={user || "User"}>
    <NavItem  onClick={logOut}>
     <span>Logout</span>
    </NavItem>
  </NavDropdown>
  </Nav>
  : ""}

</Navbar> */}