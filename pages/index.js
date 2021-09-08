import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      
      <main>


      <section style={{width: '100%', paddingBottom: '100px !important', paddingTop: '20px !important', height: '100vh !important'}} className="home-section">
        <div className="container-fluid" style={{width: '100%', position: 'relative'}}>
          <div className="row">
            <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-12 d-none d-lg-block d-md-block d-xl-block">
              {/* <h1 class=" mt-3 py-5 text-uppercase home-head" style="color: white !important;font-size: 60px !important;font-weight: 800; line-height: 1.1;">Hi, We're<br> <a href="http://www.webfinder.in" class="key"> WebFinder </a></h1> */}
              <h1 className=" mt-2 pt-3 text-capitalize home-head" >Have an idea?</h1>
              <h1 className=" anim  text-capitalize home-head" > <span className="anim-content "> </span></h1>
              <h2 className="text-capitalize  transform"> We Transform businesses into BRANDS through
                <a href="http://www.webfinder.in" className="key" style={{textDecoration:'none',color:'white'}}> web &amp; mobile app development</a>, <a href="http://www.webfinder.in" className="key" style={{textDecoration:'none',color:'white'}}>SEO</a>, <a href="http://www.webfinder.in" className="key" style={{textDecoration:'none',color:'white'}}> Social Media Marketing</a> and <a href="http://www.webfinder.in" className="key" style={{textDecoration:'none',color:'white'}}>digital marketing
                  services</a> </h2>
              <div className="port-div">
                <a className="bg-warning btn-port" href="portfolio.php" >View Portfolio →</a>
              </div>
              {/*-------------------*/}
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                      \t@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);\n\n.st {\n\twidth: 100px;\n\tdisplay: block;\n\ttext-align: center;\n\tcolor:#ffc107 !important;\n\tfont:bold 60px 'FontAwesome';\n\tline-height:100px;\n\ttext-rendering: auto;\n\t-webkit-font-smoothing: antialiased;\n}\n.fa-angle-double-down:before {content: \"\\f107\";}\n\n.bounce {\n\tposition: absolute;\n\tbottom: -3%;\n\tleft: 50% ;\n\twidth: 100px;\n\theight: 100px ;\n\tmargin-left:-30px;\n\tborder: 4px solid white !important;\n\t-webkit-border-radius:50%;\n\t-moz-border-radius:50%;\n\t-ms-border-radius:50%;\n\tborder-radius:50%;\n\tanimation: bounce 2s infinite;\n\t-webkit-animation: bounce 2s infinite;\n\t-moz-animation: bounce 2s infinite;\n\t-o-animation: bounce 2s infinite;\n}\n \n@-webkit-keyframes bounce {\n\t0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}\t\n\t40% {-webkit-transform: translateY(-30px);}\n\t60% {-webkit-transform: translateY(-15px);}\n}\n \n@-moz-keyframes bounce {\n\t0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}\n\t40% {-moz-transform: translateY(-30px);}\n\t60% {-moz-transform: translateY(-15px);}\n}\n \n@-o-keyframes bounce {\n\t0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}\n\t40% {-o-transform: translateY(-30px);}\n\t60% {-o-transform: translateY(-15px);}\n}\n@keyframes bounce {\n\t0%, 20%, 50%, 80%, 100% {transform: translateY(0);}\n\t40% {transform: translateY(-30px);}\n\t60% {transform: translateY(-15px);}\n}\n                      " }} />
            </div>
          </div>
        </div>
        <div style={{}}>
          <div className="bounce d-none d-lg-block d-xl-block d-md-block" style={{}}>
            <a href="#sect" style={{textDecoration: 'none'}}>
              <i className="st fa fa-angle-double-down" /></a>
          </div>
        </div>
        {/*------------------------*/}
        {/*--------col end -----*/}
        {/*------------------mobile started ---------------------------------*/}
        <div className="col-lg-7 col-xl-7 col-md-6 col-sm-12 col-12 d-block d-lg-none d-xl-none d-md-none">
          {/* <h1 class=" mt-3 py-5 text-uppercase home-head" style="color: white !important;font-size: 60px !important;font-weight: 800; line-height: 1.1;">Hi, We're<br> <a href="http://www.webfinder.in" class="key"> WebFinder </a></h1> */}
          <h1 className=" mt-5 pt-5 text-capitalize home-headm" >Have an idea?</h1>
          <h1 className=" anim  text-capitalize home-headml" > <span className="anim-content "> </span></h1>
          <h2 className="text-capitalize  home-web" > We Transform businesses into BRANDS through
            <a href="http://www.webfinder.in" className="key">web &amp; mobile app development</a>, <a href="http://www.webfinder.in" className="key">SEO</a>, <a href="http://www.webfinder.in" className="key"> Social Media Marketing</a> and <a href="http://www.webfinder.in" className="key">digital marketing
              services</a> </h2>
          <div style={{paddingLeft: '2% !important', marginTop: '10px !important'}}>
            <a className="bg-warning portfolio-btn" href="portfolio.php" >View Portfolio →</a>
          </div>
        </div>{/*--------col end -----*/}
        {/*-----------------------*/}
        <div className="col-lg-4 col-sm-12 col-md-6 col-12 " style={{borderRadius: '50px 5px 50px 5px !important'}}>
        </div>
        {/*-------container-fluid end-------*/}
        {/*--------- Slider end ----------------*/}
      </section>
    

<section className=" py-5 bg-warning " id="sect">

	<div className="container py-5">

		<div className="row">
         
         <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 main-di mb-5">
         	<div className="sub-div1 p-4 shadow">
         		<img className="mx-auto d-block img-web" src="images/icon/shopping.png" height="120px" width="120px" />
         		<h2 className="text-center text-capitalize para ">Develop Websites</h2>
         		<p  className="text-center">Looking to build a new website or transform an existing one that isn’t performing?</p>
         	</div>
         </div>

         <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 main-di">
         	<div className="sub-div2 p-4 shadow " >
         		<img className="mx-auto d-block img-web2" src="images/icon/lk.png" height="120px" width="120px" />
         		<h2 className="text-center text-capitalize para ">Develop Apps</h2>
         		<p  className="text-center">Do you Need applications for your Business? We are here to help you.</p>
         	</div>
         </div>

         <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 main-di">
         	<div className="sub-div3 p-4 shadow">
         		<img className="mx-auto d-block img-web3" src="images/icon/gl.png" height="120px" width="120px" />
         		<h2 className="text-center text-capitalize para ">Trending Technologies</h2>
         		<p  className="text-center descr">We Work on latest and Trending technologies. </p>
         	</div>
         </div>        
 	</div>

   
		<div className="mt-5 d-none d-xl-block d-md-block d-lg-block" data-aos="zoom-in-up" data-aos-duration="2500">
		<h2 className="text-center text-capitalize mt-5 what" >What <span style={{textTransform: 'uppercase'}} >WE</span></h2>
		<h2 className="text-center text-capitalize can">Can Do for you</h2>
	</div>


<div className="mt-5 d-block d-xl-none d-md-none d-lg-none" data-aos="zoom-in-up" data-aos-duration="2500">
		<h2 className="text-center text-capitalize mt-5 whatm" >What <span style={{textTransform: 'uppercase' }}>WE</span></h2>
		<h2 className="text-center text-capitalize canm">Can Do for you</h2>
	</div>

<div className="row" style={{ marginTop: '70px' }}>
 		<div className="col-md-6 col-lg-6 col-12"  data-aos="zoom-in-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
 			<img src="images/web.png" width="100%" height="auto"/>
 		</div>
 		<div className="col-md-2 col-lg-2 col-12">
 		</div>
 		<div className="col-md-4 col-lg-4 col-12 px-2 " data-aos="fade-down">
 			<p className="text-left text-dark high"> <a href="http://www.webfinder.in" className="text-dark"> We Develop high Quality Websites and Apps </a>using Latest technologiess. It Will Include:</p>
 			<p>
 			<span className="whatwedo">1</span>  &nbsp; <a href="http://www.webfinder.in" className="keywords" >Responsive Mobile and Web design	</a>
 			</p>
 			<p>
 			<span className="whatwedo">2</span>  &nbsp; <a href="http://www.webfinder.in" className="keywords" > High Standard Codes</a>
 			</p>
 			<p>
 			<span className="whatwedo">3</span>  &nbsp;<a href="http://www.webfinder.in" className="keywords" >  SEO Friendly</a>
 			</p>
 			<p>
 			<span className="whatwedo">4</span>  &nbsp;<a href="http://www.webfinder.in" className="keywords" >  Bugs Free Codes
 			</a></p>
 			<p>
 			<span className="whatwedo">5</span>  &nbsp; <a href="http://www.webfinder.in" className="keywords" > Various Security Features
 			</a></p>
 			<p>
 			<span className="whatwedo">6</span>  &nbsp;<a href="http://www.webfinder.in" className="keywords" > Life Time Support
 			</a></p>


 		</div>
 	</div>


	</div>
	
</section>


<section className="snapper-section section-block cust-sect" >
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 jk p-0 d-none d-lg-block d-md-block d-xl-block" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">
                <div className="abt-block" style={{width:'440px'}} >
                    <h2 className="text-capitalize text-bold" style={{fontSize:'28px' }} >We are</h2><h4 className="text-warning" style={{fontSize: '40px'}} > <span>Webfinder</span></h4>
                    <p className="color-warning text-justify full-service" >
Web finder is a full-service Internet marketing and SEO company offering innovative web marketing solutions to mid to large size companies across the globe. As a leader in SEO, web design, ecommerce, website conversion, and Internet marketing services, our firm prides ourselves on driving traffic, converting visitors, and measuring effectiveness to ultimately deliver real results for our clients.

Web Finder is proficient website architecture and improvement, B2B Data, Market Research organization situated in India. Webfinder is an amazing specialist co-op for corporate or individual keen on structuring their plan and advancement needs of electronic tasks.</p>
                    <a className="btn btn-warning color-white" href="/contact"> CONTACT US</a>
                </div>
            </div>


 <div className="col-md-6  p-0 d-block d-xl-none d-lg-none d-md-none" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000" style={{background:'white'}}>
                <div className="p-4 seo" >
                    <h2 className="text-capitalize text-left fw-700" style={{fontSize: '28 px'}} >We are</h2><h4 className="text-warning text-left fw-800" style={{fonSize: '40px'}} > <span>Webfinder</span></h4>
                    <p className="color-warning text-justify px-3 width-100" >
Web finder is a full-service Internet marketing and SEO company offering innovative web marketing solutions to mid to large size companies across the globe. As a leader in SEO, web design, ecommerce, website conversion, and Internet marketing services, our firm prides ourselves on driving traffic, converting visitors, and measuring effectiveness to ultimately deliver real results for our clients.
</p>
                    <div><Link href="contact"><a className="btn btn-warning color-white" > CONTACT US</a></Link></div>
                </div>
            </div>

            <div className="col-md-6"></div> 
        </div>
        <div className=""></div>
    </div>
</section>


<style jsx>{`
.full-service{
  width: 600px !important;
}
.portfolio-btn{
  color: white !important; width: 100%; 
  border: 3px solid white; padding: 10px 22px !important;
   font-size: 26px !important; font-weight: 700; 
   text-decoration: none !important; 
}
.home-web{
  padding-right: 7% !important; color: white !important;
   padding-bottom: 80px; padding-top: 50px; 
  font-family: "Grenze Gotisch"; cursive; 
  padding-left: 2% !important; font-size: 29px; font-weight: 700;
}
.home-headml{
  color: white !important;
  font-size: 38px !important;font-weight: 700;
  line-height: 1.1;padding-left: 1% !important;
}
.home-headm{
  color: white !important; 
  font-size: 40px !important; 
  font-weight: 900; line-height: 1.1; padding-left: 2% !important;
}
.port-div{
  padding-left: 9% !important; margin-top: -40px !important;
}
.transform{
  color: white !important; 
  padding-bottom: 100px; 
  padding-top: 40px; font-family: "Grenze Gotisch", cursive; 
  padding-left: 9% !important;
}
  .snapper-section{
            background-image: url('https://www.codeaweb.com/assets/images/nyc.jpg');background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            position: relative;
            text-align: center;
            display: flex;
            height: 100vh;
            flex-direction: column;
            flex-direction: column;
            align-items: center;
            justify-content: center;overflow: hidden;
  }

  .key{
    textDecoration:none;color:white;
  }
	
  .seo{width:100% !important ;background-color:white !important;padding-top:60px !important;padding-bottom:60px !important;}

   .cust-sect .jk:first-child::after {
    content: '';
    display: block;
    background: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(
225deg
);
    z-index: 1;
    border-radius: 80px;
}
.abt-block {
    display: flex;
    position: relative;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    text-align: left;
    height: 100vh;
    background:white !important;
}
`}
</style>

<style jsx>{`

.btn-port{
  color: white !important; border: 3px solid white; padding: 10px 22px !important;
   font-size: 26px !important; font-weight: 700; text-decoration: none !important; 
}       

@media only screen and (max-width: 720px) {
  .home-section {
    height:80vh !important;
    width:100%;
    margin-left:0px;
    padding-right:0px;
    padding:0;
    background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url('images/f.jpg');
    background-repeat: no-repeat;
    background-size: cover; }
}
.home-section {
          height:100vh;
          width:100%;
          margin-left:0px;
          padding-right:0px;
          padding:0;
          background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url('images/f.jpg');
          background-repeat: no-repeat;
          background-size: cover; }

          .img-web{
            position: absolute;left: 38%;top: 0;margin-top: -50px !important;
          }

          .para{
            padding-top: 80px !important;font-weight: 700 !important;font-size: 24px;
          }
          .descr{
            font-size: 18px !important;padding-left: 2% !important;padding-right: 2% !important;
          }
          .sub-div2{background-color: white !important;border-radius: 15px !important;margin-top: 50px;
          }

          .sub-div1{background-color: white !important;border-radius: 15px !important;
          }
          .img-web2{position: absolute;left: 38%;top: 0;margin-top: 0px !important;
          }

          .sub-div3{background-color: white !important;border-radius: 15px !important;margin-top: 100px;
          }

          .img-web3{
            position: absolute;left: 38%;top: 0;margin-top: 50px !important;
          }
          .what{
            color: white !important;font-size: 85px !important;
          }
          .can{
            color: white !important;font-size: 85px !important;margin-top: -30px !important;
          }
          .canm{
            color: white !important;font-size: 60px !important;margin-top: -30px !important;
          }
          .whatm{
            color: white !important;font-size: 60px !important; 
          }
          .high{
            font-size: 23px;font-weight: 700;color: black !important;
          }
          .keywords{
            color: white !important;font-size: 18px !important;font-weight: 600;
            text-decoration:none;
          }
          .section-blk{

            background-color: black !important;height: 100vh !important;
          }
          .talk{
            color: white !important;border: 2px solid white;
            padding: 10px 18px !important;
            text-decoration: none;
            font-size: 22px;font-weight: 700;
          }
          .talkm{
            color: white !important;border: 2px solid white;
            padding: 10px 18px !important;text-decoration: none;
            font-size: 22px;font-weight: 700;
          }
          .experience{
            margin-top:-40px;color: white !important;font-size: 40px;font-weight: 700;"
          }


        
      `}</style>

<section className="section-blk" >
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-5 col-md-6 d-none d-lg-block d-md-block d-xl-block" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
				<div className="p-4">
					<h2 className="text-uppercase pt-2 fw-700 color-white" style={{fontSize: '65px'}}>WE know your business like nobody's business</h2>
					<div className="mt-5 pt-1">
            <a className="bg-warning mx-auto talk" href="" >LET'S TALK</a></div>
			    </div>
			</div>


<div className="col-lg-5 col-md-6 d-block d-lg-none d-md-none d-xl-none" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
				<div className="p-5">
					<h2 className="text-uppercase pt-3 fw-700 color-white" style={{fontSize: '36px'}}>WE know your business like nobody's business</h2>
					<div className="mt-2 pt-1"><a className="bg-warning mx-auto talkm" href="" >LET'S TALK</a></div>
			    </div>
			</div>



<div className="col-lg-7 col-md-6 d-none d-lg-block d-md-block d-xl-block" data-aos="zoom-in-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">
	<div className="p-5">

 <h3 className="text-capitalize fw-700 color-white" style={{fontSize: '40px'}}>An experienced and trusted digital agency</h3>
 <hr className="mt-4" style={{borderTop: '4px solid white !important'}}/>
 <p className="color-white" style={{marginTop: '25px !important'}}>Our ability to build on any platform willingness to adapt to the client’s needs make us the ideal web solutions provider. Working with Webfinder means you can be as hands-on as you wish! While we do have our own growth in mind, our main focus is always to add value to our customers by refining their ideas and realising their goals through our decade-long expertise and experience.</p>
 <img src="images/icon/counterback.jpg" width="100%" height="400"/>
	</div>
	
</div>

<div className="col-lg-7 col-md-6 d-block d-lg-none d-md-none d-xl-none" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">
	<div className="p-5">

 <h3 className="text-capitalize color-white fw-700 experience" >An experienced and trusted digital agency</h3>
 <hr className="mt-4" style={{borderTop: '4px solid white !important'}}/>
 <p className="color-white" style={{marginTop: '25px !important'}}>Our ability to build on any platform willingness to adapt to the client’s needs make us the ideal web solutions provider. Working with Webfinder means you can be as hands-on as you wish! While we do have our own growth in mind, our main focus is always to add value to our customers by refining their ideas and realising their goals through our decade-long expertise and experience.</p>
	</div>
	
</div>
		</div>
	
    </div>
  
</section>



      <section style={{marginTop: '60px'}}>
        <div className="container-fluid d-none d-lg-block d-xl-block d-md-block" style={{paddingTop: '50px !important'}}>
          <div className="row">
            <div className="col-lg-7 col-md-6" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={2000}>
              <div style={{paddingTop: '40px'}}>
                <img src="images/icon/hol.png" width="100%" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6" data-aos="fade-down" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={2000}>
              <div className="p-4">
                <h3 style={{color: 'black', fontSize: '34px', fontWeight: 700, textTransform: 'capitalize'}}>Website Design Tailored To Your Business Needs</h3>
                <p className="text-left" style={{marginTop: '30px', fontSize: '18px'}}>You want a website that is customised to your specific requirements. That’s why we never use preset templates in web design. All our custom website designs are built from the ground up with your requirements in mind. We take the time to learn about your business, your customers, and specific needs so that your website is not only beautiful but also helpful to grow your business in a meaningful way.</p>			     
                <div className="pt-3">
                  <Link href="contact"><a  className="bg-warning border-dark quote-btn" >Get a Quote</a></Link>
                </div>
              </div>{/*--------------*/}
            </div>{/*---------main---------*/}
          </div>
        </div>
        <div className="container d-block d-lg-none d-xl-none d-md-none" style={{marginTop: '50px'}}>
          <div className="row">
            <div className="col-lg-5 col-md-6" data-aos="fade-down" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={2000}>
              <div className="p-3">
                <h3 style={{color: 'black', fontSize: '34px', fontWeight: 700, textTransform: 'capitalize'}}>Website Design Tailored To Your Business Needs</h3>
                <p className="text-left" style={{marginTop: '30px', fontSize: '18px'}}>You want a website that is customised to your specific requirements. That’s why we never use preset templates in web design. All our custom website designs are built from the ground up with your requirements in mind. We take the time to learn about your business, your customers, and specific needs so that your website is not only beautiful but also helpful to grow your business in a meaningful way.</p>			     
                <div className="pt-3">
                  <Link href="contact"><a  className=" border-dark quote-btn bg-warning" >Get a Quote</a></Link>
                </div>
              </div>{/*--------------*/}
            </div>{/*---------main---------*/}
            <div className="col-lg-7 col-md-6" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={2000}>
              <div style={{paddingTop: '40px'}}>
                <img src="images/icon/hol.png" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
 <style jsx>{`
a{
  text-decoration:none;
}
.quote-btn{
  color: white !important; padding: 10px 20px !important;
   font-size: 18px; font-weight: 700;
    text-decoration: none !important;
}
.home-head{
  color: white !important;
   font-size: 70px !important; font-weight: 800; line-height: 1.1; padding-left: 9% !important;
}
        
      `}</style>

<style global jsx>{`

         .fw-700{
          font-weight:700 !important;
        }
     
        .fw-800 {
          font-weight:800 !important;s
        }

        .width-100{
          width:100% !important;
        }
        .color-white{
          color:white !important;
        }
      `}</style>
        </main>
    </div>

    
  )
}
