import{createGlobalStyle} from'styled-components';
const GlobalStyle=createGlobalStyle`
  body{
  margin: 0;
  height:100vh;
  background:#C7C7C7;
  
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



`
export default GlobalStyle;