import React from 'react'
import Globalestyle from '../Styles/GlobalStyle';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from'react-bootstrap/Nav';
import Container from'react-bootstrap/Container';
import Carousel from'react-bootstrap/Carousel';
import ContentTabs from '../ContentTabs';
import image1 from'../Images/carousel/carousel-1.jpg';
import image2 from'../Images/carousel/carousel-2.jpg';
import image3 from'../Images/carousel/carousel-3.jpg';
import FooterContent from '../Footer/FooterContent';
import { ThemeProvider } from 'styled-components';
import PageHeading from '../Heading/PageHeading';
import theme from '../Styles/theme';
import Footer from '../Footer/Footer';

function HomePage() {
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
                      <Nav.Link href="./HomePage.js" className="active">Home</Nav.Link>
                      <Nav.Link href="./News/NewsPage.js">News</Nav.Link>
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
            <Carousel data-interval="false">
              <Carousel.Item>
                <img
                  className="d-block w-100 h-400" 
                  src={image1}
                  alt="old tv product"
                /> 
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-400"
                  src={image2}
                  alt="old camera"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-400"
                  src={image3}
                  alt="old tv components"
                />
              </Carousel.Item>
            </Carousel>
            <Container>
              <PageHeading>We do YAY things</PageHeading>
              <p>
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
              </p>
            </Container>
            <Container className="Tabs-wrapper">
              <ContentTabs/>
            </Container>
          </main>
          <footer>
            <Container>
              <FooterContent>
                <Footer/>
              </FooterContent>
            </Container>
            
          </footer>
        </div>
      </ThemeProvider>
      
                  
    </>
  )
}

export default HomePage;
