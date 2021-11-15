import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from'react-bootstrap/Nav';
import Container from'react-bootstrap/Container';
import Carousel from'react-bootstrap/Carousel';
import ContentTabs from './ContentTabs';


function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="active">Home</Nav.Link>
              <Nav.Link href="#action2">News</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-400" 
            src="/images/carousel/carousel-1.jpg"
            alt="old tv product"
          /> 
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-400"
            src="/images/carousel/carousel-2.jpg"
            alt="old camera"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-400"
            src="/images/carousel/carousel-3.jpg"
            alt="old tv components"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <h2>We do YAY things</h2> 
        <p>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
        </p>
      </Container>
      <Container>
        <ContentTabs/>
      </Container>
                       
    </>
  )
}

export default Home
