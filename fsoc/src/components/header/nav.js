import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';

function Header() {

  let navigate = useNavigate()
  let user = localStorage.getItem('user_name')


  function logOut(){
    localStorage.clear()
    navigate('/login')
  }


// console.log("uuuu",user);
  return (
    <Navbar bg="black" expand="md">
      <Navbar.Brand href="/">AI Generated Images</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">See Images</Link>
          </Nav.Item>          
          <Nav.Item>
            <Link to="/" className="nav-link">Create Image</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/register" className="nav-link">Register</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">Login</Link>
          </Nav.Item>
        <NavDropdown title={"User"||user}>
          <NavItem onClick={logOut}>
            LogOut
          </NavItem>
        </NavDropdown>
    
        </Nav>
      </Navbar.Collapse>
      {/* {localStorage.getItem('user_name') ?
      <Nav>
      </Nav>
      : null} */}
    </Navbar>
  );
}

export default Header;