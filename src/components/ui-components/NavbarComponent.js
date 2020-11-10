import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

import './NavbarComponent.css';

const NavbarComponent = () => {

  let history = useHistory();

  const renderAuthButton = () => {
    if (localStorage.getItem("username") === null) {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="brand-link">
            <Link to="/">Product Mart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="link">
                <Link to="/products">Products</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/register">Register</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="brand-link">
            <Link to="/">Product Mart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="link">
                <Link to="/products">Products</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/myproducts">My Products</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/addProduct">Add Product</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/productStats">Statistics</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/cart">Cart</Link>
              </Nav.Link>
              <NavDropdown
                title={localStorage.getItem("username")}
                id="basic-nav-dropdown"
                className="ddm"
              >
                <NavDropdown.Item>
                  <Link to="/myprofile">My Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => logout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  };

    function logout() {
      localStorage.clear();
      history.push("/");
    }

  return <div>{renderAuthButton()}</div>;
};

export default NavbarComponent;