import{createGlobalStyle} from'styled-components';
const GlobalStyle=createGlobalStyle`
  body{
  margin: 0;
  height:100vh;
  background:#C7C7C7;
  font-family: 'Lato', sans-serif;
  
}

.page--wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  
}

header{
  background:#EFEFEF;
 
  
}

.main-wrapper{  
flex-grow: 1;
background: ;

}

footer{
  background: white;
  height: 100px;
  
}


.navbar-light .navbar-brand {
  color:#E92569;
  
}

.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show > .nav-link {
  background: white;
}

.my-2 {
 
  margin-bottom: 0rem !important;
}
.navbar-nav-scroll {
  overflow-y: unset;
}

.container, .container-lg, .container-md, .container-sm, .container-xl {
  margin: 0px auto;
 
}

.img-col{
  display:flex;
  gap: 20px;
  background: white;
  padding: 10px;
  margin-left: 13px;
}

.tabs-social-media, .a-social-media{
  display:flex;
  gap: 15px
  
}

.fa-facebook-f, .fa-twitter{
  font-size: 25px;
}



.nav-tabs {
  gap: 10px;                 
  background: #C7C7C7;
  ;
}

//Tabs

.Tabs-wrapper{
  margin: 25px auto;
}

//footer

.f-social-media{
  
}

//accordion
.accordion-image{
  width:300px;
}

.a-content{
  margin: 5px auto;
  max-width: 770px;
  width: 300px;
}

.a-social-media{
  padding: 25px 0px 0px 6rem;
}

//NEWS

.news-col{
  width: 290px;
  background: white;
  border-radius: 20px;
  padding-bottom: 25px;
  margin: 10px auto;
}

.news--col{
  width: 270px;
  margin: 7px;
  position: relative;
  left: 20px;
}

.More-btn{
  width: 250px;
}

//CONTACT

.contact-wrapper{
  width: 300px;
}
.contact-info{
  display:flex;
  gap: 15px;
}

.form-wrapper{
  width:300px;
  margin: 10px auto;
}

.contact-info-wrapper{
  width:300px;
  margin: 10px auto;
}

.contact-submit-btn{
  width: 276px;
}

@media(min-width: 700px){
  .contact-wrapper{
    width: 700px;
  }
}


`
export default GlobalStyle;