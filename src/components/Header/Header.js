import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteStoredData, get_auth_key } from "../../utils/storage";

const Header = () => {

    const navigate = useNavigate()
const logoutHandler = () => {
    deleteStoredData(get_auth_key())
    window.location.reload()
  navigate('/')
}

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Coounter</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="">Home</Nav.Link>
     
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link  onClick={logoutHandler}>Sign Out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </React.Fragment>
  );
};

export default Header;
