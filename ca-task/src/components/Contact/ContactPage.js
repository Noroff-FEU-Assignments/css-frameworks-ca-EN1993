import React from "react";
import GlobalStyle from '../Styles/GlobalStyle';
import Container from'react-bootstrap/Container';
import FooterContent from '../Footer/FooterContent';
import { ThemeProvider } from 'styled-components';
import theme from '../Styles/theme';
import Footer from '../Footer/Footer';
import PageHeading from "../Heading/PageHeading";
import FormContent from "./FormContent";

function ContactPage() {
  return(
    

    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <div className="page--wrapper">
          <main className="main-wrapper">
           <Container>
             <PageHeading>Submit your details</PageHeading>
             <FormContent/>
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

export default ContactPage;