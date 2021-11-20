import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HomePage from '../Home/HomePage';
import NewsPage from '../News/NewsPage';
import ContactPage from '../Contact/ContactPage';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function NavMenu() {
  return(
    <Router>
      <div>
        <header >
          <Container>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '' }}
                    navbarScroll>
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/news" className="nav-link"> News</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
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
        </header>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/news">
                <NewsPage/>
            </Route>
            <Route path="/contact">
                <ContactPage />
            </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default NavMenu;