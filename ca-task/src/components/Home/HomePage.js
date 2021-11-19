import React from 'react'
import GlobalStyle from '../Styles/GlobalStyle';
import Container from'react-bootstrap/Container';
import Carousel from'react-bootstrap/Carousel';
import ContentTabs from './ContentTabs';
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
    <div className="page--wrapper">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <main className="main-wrapper">
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
      </ThemeProvider>
    </div>
                  
    
  )
}

export default HomePage;
