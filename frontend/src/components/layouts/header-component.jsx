import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
const Header = () => {
  return (
    <React.Fragment>
      <Navbar bg="danger" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="#home">Food App</Navbar.Brand>
        <NavDropdown title="Profile" className="ml-auto">
          <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </React.Fragment>
  );
};
export default Header;
