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
    

      
      
        <div className="container-fluid contact-sec">
          <h2 className="text-center text-uppercase  color-white" style={{fontSize: '60px !important', fontWeight: 700}}>Contact Us </h2>
        </div>
        
        <div className="container mt-5">
          <div className="row">
            <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center mb-3 con-div py-4 bg-warning ">
                <h4>
                  Contact:
                </h4>
                <p style={{color: 'white !important'}}>+91-9639150397</p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center mb-3 con-div py-4 bg-danger" >
                <h4>
                  Email:
                </h4>
                <p style={{color: 'white !important'}}>info@webfinder.in</p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center mb-3 con-div py-4 bg-success" >
                <h4>
                  Address:
                </h4>
                <p style={{color: 'white !important'}}>Transport Nagar Dehradun</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container contact-div" >
          <div className="row">
            <div className=" col-lg-5 col-md-5 col-sm-12 col-12  shadow p-5 mb-4" style={{borderRadius: '15px !important', marginBottom: '25px !important'}}>
              <div>
                {/*?php include("Connection.php"); ?*/}
                <h1 className="text-center text-uppercase pb-4">Connect With Us</h1>
                <form className="form-validate " method="POST" action="">
                  <div className="form-group">
                   
                    <input type="text" name="iname" id="namE"  style={{height: '50px !important'}} className=" form-control  mx-auto" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="icontact" id="contacT"  style={{height: '50px !important'}} className=" form-control  mx-auto" placeholder="Contact-no" />
                  </div>
                  <div className="form-group">
                    <input type="text" id="emaiL" name="iemail"  style={{height: '50px !important'}} className=" form-control  mx-auto" placeholder="E-mail:" />
                    <small id="emailHelp" className="form-text text-muted text-center">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <textarea cols="60" rows="6" type="text"  className=" form-control  mx-auto" id="texT" placeholder="Describe your Query:" name="iquery"></textarea>
                  </div>
                  <div className="justify-content-center form-group text-center ">
                    <input type="Submit" className=" submit-btn" name="isubmit" defaultValue="submit"  />
                  </div> 
                </form> 
              </div>
            </div>
            <div className="col-lg-7 col-md-7 ">
              <div>
                <div style={{width: '100%'}}><iframe width="100%" height={600} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dehradun+(Webfinder)&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://www.maps.ie/draw-radius-circle-map/">Webfinder</a></div>
              </div>
            </div>
          </div>
        </div>
   
        
       
       
<Footer />
<style global jsx>{`
.submit-btn{
  color: white !important; background-color: black !important;
   text-transform: uppercase !important; 
  font-weight: 700; font-size: 18px !important;
   padding: 10px 45px !important;
   border-radius:25px;
}
.con-div{
  padding-bottom: 40px !important; padding-top: 40px !important;
}
.contact-div{
  margin-top: 90px !important; margin-bottom: 90px !important;
}
.contact-sec{
  background-image: url("https://cdn2.hubspot.net/hub/445465/hubfs/home-banner.jpg?width=1249&height=755&name=home-banner.jpg");
   padding-top: 80px; padding-bottom: 80px; 
  background-position: center; 
  background-repeat: no-repeat; background-size: cover;
}
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
