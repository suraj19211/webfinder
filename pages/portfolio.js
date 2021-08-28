import Head from 'next/head';
import indx3 from '../style/index3.module.css'
import { Navbar } from '../components/Navbar'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
       <Links />
       </Head>
      <main>
      <Navbar />

      <section className="home-section" >
</section>

<section className=" py-5 bg-warning">

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
                    <p className="color-warning" style={{width: '600px !important'}}>
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
                    <div><a className="btn btn-warning color-white" href="https://www.codeaweb.com/contact-us"> CONTACT US</a></div>
                </div>
            </div>

            <div className="col-md-6"></div> 
        </div>
        <div className=""></div>
    </div>
</section>


<style jsx>{`
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

            background-color: black !important;height: 100vh !important;margin-top: 70px !important;
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
<Footer />
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
