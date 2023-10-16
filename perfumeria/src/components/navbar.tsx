// src/components/Navbar.tsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className='p-0'>
      <Container fluid className='p.0'> 
        <Navbar.Brand as={Link} to="/">Perfumes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
          </Nav>
      </Container>
      <style>
        {`
          .container-fluid {
            padding: 0;
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavigationBar;
