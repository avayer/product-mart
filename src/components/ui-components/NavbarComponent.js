import React from 'react';
import { useHistory } from "react-router-dom";
import  { Navbar, Nav, Button } from 'react-bootstrap';

const NavbarComponent = () => {

  let history = useHistory();

  const renderAuthButton = () => {
    if (localStorage.getItem("username") === null) {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Product Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Product Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/myproducts">My Products</Nav.Link>
              <Nav.Link href="/addProduct">Add Product</Nav.Link>
              <Nav.Link href="/myprofile">My Profile</Nav.Link>
              <Nav.Link href="/productStats">Statistics</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link>
                <Button onClick={() => logout()}>Logout</Button>
              </Nav.Link>
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

        // <div>
        //   <p>{}</p>
        //   <Link to="/products">Products</Link>
        //   <Link to="/myproducts">My Products</Link>
        //   <Link to="/addProduct">Add product</Link>
        //   <Link to="/myprofile">My Profile</Link>
        //   <Link to="/productStats">Products-Statistics</Link>
        //   <Link to="/cart">Cart</Link>
        //   <button onClick={() => logout()}>Logout</button>
        // </div>