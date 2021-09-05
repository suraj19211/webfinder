import Link from 'next/link';

export const Navbar = () => {
    return (
      <>
<style jsx>{`

.icon-bar{
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	z-index: 10;
	left:100%;
}

.icon-bar a{
  text-decoration: none !important;
  width: 180px;
  background:#3b5999;
  color: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  padding:3px;
  transform:translateX(-40px);
 -webkit-transform:translateX(-40px);
-ms-transform:translateX(-40px);

transition:0.5s linear;
 -webkit-transition:0.5s linear;
-ms-transition:0.5s linear;
}

.icon-bar a:hover{
	 transform:translateX(-180px);
 -webkit-transform:translateX(-180px);
-ms-transform:translateX(-180px);
}

.icon-bar a i{
	padding-left: 4px;
	padding-right: 8px;
	font-size: 30px !important;
	animation: letszoom 3s linear alternate-reverse infinite;
}
.cform{
	border-radius: 25px !important;
	width:80%;
	align-items: center;
}
@keyframes letszoom{

from{
	transform: scale(0.8);

}

to{
	transform: scale(1);
}
}

.anim-content::before { 
            content: "Expand your Brand"; 
            animation: animate infinite 3s; 
            transition: 0.4s;
            padding-left: 10px; 
        } 
  
        @keyframes animate { 
  
            0% { 
                content: "Expand Your Brand"; 
            } 
  
            50% { 
                content: "Let's Connect"; 
            } 
  
            75% { 
                content: "Speak To Us"; 
            } 
        } 

        .lform{
	display: none;
}

.fform{
	border-bottom:1px solid #58595B !important;
	display: inline;
	border:0px solid #343A40;
	background-color: #343A40 !important;
	color: white !important;
}


.ml {
	width: 100% !important;
	height: 100% !important;
	background-color: black !important;
	
}

.close{
	
	color: black !important;
    background-color: #ffffff !important;
}

.orange{
	color:white !important;
}
p{
    font-family: 'Mali', cursive !important;
}


@media (max-width: 768px)
{
.dropdown-menu a {
    font-size: 18px !important;
    color: black !important;
    font-weight: 500 !important;
    padding: 2px 10px !important;
    color: white !important;
    background: #ffc107 !important;
}

.dropdown-menu{
	background-color: #ffc107 !important;

}
.navbar-nav a{
	padding: 2px 14px !important;
}
.dropdown-menu{
	width: 100% !important;
}
}
.navbar-collapse{
	margin-right: 70px !important ;
}

.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; 
 }
 .img-bgk{
  height: 90px !important;width: 220px !important;
 }

 navbar{

  box-shadow: 0 2px 2px -2px rgba(0,0,0,.4);
 }

 .contact{
  background-color: #F47521 !important;
  padding: 8px 16px !important;
  color: white !important;
  margin-top: 0px !important;
 }
 .nav-link{
   color:black;
   font-weight:600;
   font-size:18px;
   padding-right: 14px !important;
   padding-left:14px !important;
 }
 @media (max-width: 1265px){
   .nav-link{
    color:black ;
    font-weight:600;
    font-size:16px;
    padding-right: 9px !important;
    padding-left:9px !important;
   }
 }

 @media (max-width: 1132px){
  .nav-link{
   color:black;
   font-weight:500;
   font-size:15px;
   padding-right: 7px !important;
   padding-left:7px !important;
  }
}

@media (max-width: 1073px){
  .nav-link{
   color:black ;
   font-weight:500;
   font-size:14px;
   padding-right: 4px !important;
   padding-left:4px !important;
  }
}

@media (max-width: 800px){
  .nav-link{
   color:black ;
   font-weight:500;
   font-size:18px;
   padding:14px 10px;
  }
  .contact{
    background: !important;
    
  }
}
 `}
</style>

    <nav id="navbar_top" className="navbar  navbar-expand-lg header-sticky ">

	     
		 <div className="container-fluid">
		      <Link href="/"><a className="navbar-brand d-none d-lg-block d-xl-block "><img src="images/lo.png" height="90px" width="340px"/></a></Link>
		      
		      <Link href="/"><a className="navbar-brand d-block d-lg-none d-xl-none d-md-block" ><img className="img-bgk" src="images/bgk.png" /></a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
    <span className=""><img src="images/menu.png" height="30px" width="30px"/></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto" id="mydiv">

    <Link href="/digital-marketing"><a className="nav-item nav-link">Digital Marketing</a></Link>
            {/* <Link href="/portfolio"><a className="nav-item nav-link">Portfolio</a></Link> */}

    <Link href="/services"><a className="nav-item nav-link">Services</a></Link>



    <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        	         
          {/* <Link href="/web-development"><a className="dropdown-item" >Web Development</a></Link> */}
                    {/* <div className="dropdown-divider"></div>

          <Link href="/ecommerce-development"><a className="dropdown-item" >Ecommerce Development</a></Link>
          <div className="dropdown-divider"></div> */}
          <Link href="/digital-marketing"><a className="dropdown-item">Digital Marketing</a></Link>

        </div>
      </li>

     
<Link href="/pricing"><a className="nav-item nav-link" >Pricing</a></Link>
 <Link href="/about"><a className="nav-item nav-link" >About </a></Link>

    <Link href="/contact"><a className="nav-item nav-link  contact"  style={{color:'white !important'}}>Contact Us</a></Link>

      
      
    </div>
	</div>
</div>
	</nav>
      </>
    );
  };