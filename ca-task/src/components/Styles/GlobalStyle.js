import{createGlobalStyle} from'styled-components';
const Globalestyle=createGlobalStyle`
body{
  height:100vh;
  background:#C7C7C7;
  
}

.page-wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
}

header{
  background:blue;
}

main{
  
flex-grow: 1;
}

footer{
  height:100px;
  background: white;

}


.navbar-light .navbar-brand {
  color:#E92569;
}

.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show > .nav-link {
  background: white;
}



.container, .container-lg, .container-md, .container-sm, .container-xl {
  margin: 25px auto;
 
}

.img-col{
  display:flex;
  gap: 20px;
  background: white;
  padding: 10px;
  margin-left: 13px;
}

.tabs-social-media{
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
  
}

//footer

.f-social-media{
  
}



`
export default Globalestyle;