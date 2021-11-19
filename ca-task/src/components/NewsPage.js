import React from 'react'
import Globalestyle from './Styles/GlobalStyle';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from'react-bootstrap/Nav';
import Container from'react-bootstrap/Container';
import FooterContent from './footer/FooterContent';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';



function NewsPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalestyle/>
        <div className=".page--wrapper">
          <header >
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
                      <Nav.Link href="./HomePage.js">Home</Nav.Link>
                      <Nav.Link href="./News/NewsPage.js" className="active">News</Nav.Link>
                      <Nav.Link href="#action2">Contact</Nav.Link>
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
          <main>
            
          </main>
          <footer>
            <Container>
              <FooterContent>
                <span className="f-social-media">
                  <i class="fab fa-vimeo-v"></i>
                  <i class="fab fa-youtube"></i>
                </span>
                <span className="footer-p ">
                  <p> hello@yay.com</p>
                  <p >Copyright 2020</p>
                </span>
                 
              </FooterContent>
            </Container>
            
          </footer>
        </div>
      </ThemeProvider>
      
                  
    </>
  )
}

export default NewsPage;