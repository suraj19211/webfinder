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
    

      
      
        <div className="container-fluid" style={{backgroundImage: 'url("https://cdn2.hubspot.net/hub/445465/hubfs/home-banner.jpg?width=1249&height=755&name=home-banner.jpg")', paddingTop: '160px', paddingBottom: '160px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <h2 className="text-center text-uppercase text-warning " style={{fontSize: '60px !important', fontWeight: 700}}>Contact Us </h2>
        </div>
        
        <div className="container mt-5">
          <div className="row">
            <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center mb-3 py-4 bg-warning" style={{paddingBottom: '40px !important', paddingTop: '40px !important'}}>
                <h4>
                  Contact:
                </h4>
                <p style={{color: 'white !important'}}>+91-9639150397</p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center mb-3 py-4 bg-danger" style={{paddingBottom: '40px !important', paddingTop: '40px !important'}}>
                <h4>
                  Email:
                </h4>
                <p style={{color: 'white !important'}}>info@webfinder.in</p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center mb-3 py-4 bg-success" style={{paddingBottom: '30px !important', paddingTop: '30px !important'}}>
                <h4>
                  Address:
                </h4>
                <p style={{color: 'white !important'}}>MDDA Complex , clocktower<br />Dehradun</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop: '90px !important', marginBottom: '90px !important'}}>
          <div className="row">
            <div className=" col-lg-7 col-md-7 col-sm-12 col-12  bg-warning p-5" style={{borderRadius: '15px !important', marginBottom: '25px !important'}}>
              <div>
                {/*?php include("Connection.php"); ?*/}
                <h1 className="text-center text-uppercase pb-4">Connect With Us</h1>
                <form className="form-validate " method="POST" action="action.php">
                  <div className="form-group">
                    <input type="text" name="iname" id="namE" defaultValue style={{height: '50px !important'}} className=" form-control  mx-auto" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="icontact" id="contacT" defaultValue style={{height: '50px !important'}} className=" form-control  mx-auto" placeholder="Contact-no" />
                  </div>
                  <div className="form-group">
                    <input type="text" id="emaiL" name="iemail" defaultValue style={{height: '50px !important'}} className=" form-control  mx-auto" placeholder="E-mail:" />
                    <small id="emailHelp" className="form-text text-muted text-center">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <input type="text" style={{height: '50px !important'}} className=" form-control  mx-auto" id="texT" placeholder="Describe your Query:" name="iquery" />
                  </div>
                  <div className="justify-content-center form-group text-center ">
                    <input type="Submit" className="btn" name="isubmit" defaultValue="submit" style={{color: 'white !important', backgroundColor: '#FA6742 !important', textTransform: 'uppercase !important', fontWeight: '700px', fontSize: '18px !important', padding: '10px 18px !important'}} />
                  </div> 
                </form> 
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div>
                <div style={{width: '100%'}}><iframe width="100%" height={600} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dehradun+(Webfinder)&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://www.maps.ie/draw-radius-circle-map/">Webfinder</a></div>
              </div>
            </div>
          </div>
        </div>
   
        
       
       
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
