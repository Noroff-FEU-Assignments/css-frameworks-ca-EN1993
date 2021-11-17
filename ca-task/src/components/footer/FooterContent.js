import styled from "styled-components"

const FooterContent = styled.div`


.f-social-media{
 display: flex;
 justify-content: center;
}

.footer-p{
  display:flex;
  justify-content: space-between;
}

.fa-vimeo-v, .fa-youtube{
  font-size:27px;
  padding: 10px;
}

@media(min-width: 990px){
 
  .f-social-media{
    display: block;
    position: relative;
    top: 35px;
    
   }
   
   .footer-p{
     display:flex;
     justify-content: start;
     float:right;
     gap: 25rem;
     
   }
   
   .fa-vimeo-v, .fa-youtube{
     font-size:27px;
     padding: 10px;
    
   }
 
};




`
export default FooterContent;