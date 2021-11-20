import React from 'react'
import GlobalStyle from '../Styles/GlobalStyle';
import Container from'react-bootstrap/Container';
import FooterContent from '../Footer/FooterContent';
import { ThemeProvider } from 'styled-components';
import theme from '../Styles/theme';
import Footer from '../Footer/Footer';



function NewsPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <div className=".page--wrapper">
          <main>
           <h2>This is News-page</h2> 
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

export default NewsPage;