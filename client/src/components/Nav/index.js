import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar(props) {
    return (
<header className="navigation">
<Navbar collapseOnSelect expand="lg" bg="custom-nav" >
  <Navbar.Brand href="/">Curbside</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/upload">Upload</Nav.Link>
    <Nav.Link href="#"></Nav.Link>
    <Nav.Link href="/search">Search</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
</header>
    )
}
 
export default NavBar;