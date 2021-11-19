import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar'
import Button from '@restart/ui/esm/Button';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Form from'react-bootstrap/Form';


function NavBar() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '' }}
              navbarScroll
            >
              <Link to="./HomePage.js" className="active">Home</Link >
              <Link to="./News/NewsPage.js">News</Link>
              <Link to="#action2">Contact</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="search">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavBar
