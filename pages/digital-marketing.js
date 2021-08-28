import Head from 'next/head'
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


      <section className="topsect" >
	<div className="container py-5">
		<div className="row">
			<div className="col-lg-5 col-md-12 col-12 col-sm-12 pt-5 d-block d-lg-none d-xl-none">
      
 		<img src="images/icon/bggraph.png" className="width-100" style= {{height:'auto !important'}} />

 	
</div>
			<div className="col-lg-6 col-md-12 col-12 col-sm-12 ">
				<div>
					<h3 className="text-capitalize heads" style={{marginTop: '10px !important'}}>A Topnotch  </h3>
					<h2 className="text-capitalize heads" >Digital Marketing Company</h2>
					<h3 className="text-capitalize heads" >with over 500 clients  </h3>
				            
				         <p className="py-4 color-white fw-700" style={{fontSize: '20px'}}>
     Webfinder creates the perfect Digital Marketing Strategy for large brands to small and medium sized enterprises.
</p>  
<div className="pl-3">
<ul style={{listStyleType: 'square'}}>
	<li className="lists" > AdWords Certified Agency</li>
	<li className="lists" >Branding and Conversion Focused</li>
	<li className="lists" > Customized Plans to Suit All Budgets
</li>
<li className="lists"> Organic, Paid, Social, CRO, ORM & More
</li>
</ul> 
</div>
                      
</div>
</div>

<div className="col-lg-5 col-md-12 col-12 col-sm-12 pt-5 d-none d-lg-block d-xl-block">
      
 		<img src="images/icon/bggraph.png" style={{width: '500px'}} height="auto"/>

 	
</div>


<div className="col-lg-12 col-md-12 pt-5">

	<table className="table table-bordered table-responsive">
		
		<tr>
			<td style={{width: '18% !important'}} className="color-white text-center table-tr">
				SEO
			</td>
			<td style={{width: '18% !important'}} className="color-white text-center table-tr">PPC</td>
			<td style={{width: '18% !important'}} className="color-white text-center table-tr">SMO</td>
			<td style={{width: '23% !important'}} className="color-white text-center table-tr">
				Content Marketing
			</td>
			<td style={{width: '23% !important'}} className="color-white text-center table-tr">FB Page Marketing</td>
		</tr>
		<tr>
			<td style={{width: '20% !important'}} className="color-white text-center table-tr">
				Youtube Marketing
			</td>
			<td style={{width: '20% !important'}} className="color-white text-center table-tr">Linkedin Marketing</td>
			<td style={{width: '20% !important'}} className="color-white text-center table-tr">Google Analytics</td>
			<td style={{width: '20% !important'}} className="color-white text-center table-tr">
				Online Reputation 
			</td>
			<td style={{width: '20% !important'}} className="color-white text-center table-tr">Lead Generation</td>
		</tr>

	</table>

</div>

	</div>
    </div>
</section>

<div className="container py-3 mx-auto">
	<img className="d-block mx-auto width-100" src="images/icon/sc.png"/>
</div>

<section className="  px-1 bg-dark" style={{marginTop: '20px !important'}}>
	<div className="container py-5" id="sect" >
		
		<div className="row">
			<div className="col-lg-6 col-md-5 d-block d-lg-none d-md-none d-xl-none mb-4">
 	        <div>
 		<img src="images/icon/bdm.png" width="100%" height="auto"/>

 	        </div>
            </div>
 
 <div classname="col-lg-6 col-md-7 col-12 col-sm-12">
        <div>
          <h3 classname="fw-700  text-center best-dig" >Best Digital Marketing Company in India</h3>
          <p style={{fontSize: '16px !important', color:'white'}} classname="color-white py-3">For selling your product in the digital market your presence should be noticed by the target users on the internet.<br />
            Before and after launching of any digital product like E-Commerce Website, applications, services etc. people should know about your product so they can purchase your product at the right time.
            <br />
            There is user traffic which has to be generated to sell your product online. Traffic can be generated either through an organic way or a paid way.<br />
            Verve Logic provides solutions for both but we prefer the organic way due to its long term benefits.
            <br />
            Organic traffic can be generated through various ways like website submission to various search engines, blogs, social media like Facebook, Twitter, Youtube, Google Circle etc. Paid traffic is done through ad campaigning etc.</p>
          <a href="contact.php" className="contact-href" >Get in Touch <span style={{fontSize: '28px !important'}}>→</span></a>
        </div>
      </div>

 <div className="col-lg-6 col-md-5 d-none d-lg-block d-md-block d-xl-block">
 	<div className="pt-5">
 		<img src="images/icon/bdm.png"/>

 	</div>
 </div>

		</div>

	</div>
</section>

<section style={{backgroundColor: '#213461 !important', paddingTop: '50px !important', marginTop: '80px !important'}}>
        <div classname="container-fluid pb-5">
          <h3 classname="text-center pb-5" style={{color: 'white !important', fontSize: '38px !important', fontWeight: 700}}>Digital Marketing Services</h3>
          <div classname="row" >
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 ">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Search engine Optimisation<br /> (SEO)</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Social Media Marketing<br /> (SMM)</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Pay Per Click<br /> (PPC)</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Online Reputation Management </h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>FB Page Management</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Twitter Account Management</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Google Adwords</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Google Analytics</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>YouTube Channel Management</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Linkedin Account Management</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Conversion Rate Optimisation Services</h4>
              </div>
            </div>
            <div classname="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div classname="bg-warning text-center p-2 py-5">
                <h4 style={{color: 'white !important'}}>Discuss Project</h4><br />
                <a href="contact.php" style={{color: '#ffc107 !important', backgroundColor: 'white !important', borderRadius: '25px !important', textDecoration: 'none !important', padding: '8px 18px !important', fontWeight: '700 !important'}}>LET'S TALK</a>
              </div>
            </div>
          </div>{/*-----------row----------*/}
        </div>
      </section>

<Footer />
<style jsx>{`
.best-dig{
    font-size: 38px !important;color:white !important;
}
.topsect{
    background:black !important;
}
           .bg-warning{
               background:yellow !important;
               padding:20px;
           }
         .heads{
            font-size:40px !important;font-weight: 700;color: white !important;

         }
         .lists{
            color: white !important;font-size: 21px !important;font-weight: 600;
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
