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
    


        <div className="container-fluid bg-dark p-4">
          <h2 className="text-center text-uppercase color-white" style={{fontSize: '39 !important', fontWeight: 700}}>AbOUT US </h2>
        </div>
        {/*---------------------Title End -----------------*/}
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <img src="images/the.jpg" width="100%" height="auto" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h2 className="text-center font-weight-bold text-uppercase mt-2">WEB FINDER<span className="underline-magical"> COMPANY PROFILE</span> </h2>  <br />  
              <hr className="divider" /><br />
              <p className="  text-justify">Webfinder is a Web Development and App Development Company located in Dehradun , Uttrakhand . We believe in providing best services in very moderate budget.We help Our Customers to reach there goals in minimum time. We provide all types of Services (ecommerce web and app, CMS, Digital Marketing Service, SEO Services, SMM Services),etc.
                <br /><br />
                Web Finder is a worldwide IT administrations organization, working with customers in the zones that affect and rethink the center of their organizations. Since its initiation into the worldwide scene, Web Finder centers around 'transformational redistributing', underlined by development and worth creation, and offers incorporated arrangement of administrations including programming drove IT arrangements, CMS Based Solutions, Multimedia R&amp;D administrations.
                <br /><br />
                Web Finder can offer you a wide scope of expert administrations to satisfy the entirety of your business needs. We at Web Finder have a master group of creators, designers and web showcasing/internet searcher promoting advisors to convey a quality administrations to our every single important customer. That shows their long stretches of involvement with the business of web. 
                <br /><br />
                With Web Finder settled quality procedures and tough measures clung to every one of our tasks. We guarantee that our clients are consistently at a favorable position as far as less cost, diminished hazard, increment in effectiveness and ideal asset usage. 
                <br /><br />
                <span className="text-info font-weight-bold">
                  "Our Core Values are Integrity, Teamwork, Excellence, Independent, Thinking and Creativity!"</span>
              </p>
            </div>
          </div>
          <hr />
        </div>
        {/*-----------------mission -------------*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <img src="images/mv.jpg" width="100%" height="auto" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h2 className="text-center font-weight-bold text-uppercase mt-2">WEB FINDER<span className="underline-magical"> Vission &amp; mission</span> </h2>  <br />  
              <hr className="divider" /><br />
              <p className="  text-justify">
                To assist individuals with opening their actual potential and increase a champ's edge through his worth based projects and products.To help people and associations become progressively gainful, by expanding on Attitude, Leadership, and Motivation and Values. 
                <br /><br />
                Our fundamental objective is to give savvy Website Designing and Development Services, alongside the best client assistance and backing. Imperial Developer is the main Web Development Company with higly gifted engineers. Our designers are master in their field and offer quality assistance to our customers. 
                <br /><br />
                We give 100% devotion to chip away at customer's tasks and furnishing best online administrations with more noteworthy straightforwardness in work and opportune fulfillment of the ventures. 
                <br /><br />
                We are offering all encompassing scope of Website Design, Web Development and IT Solutions to the corporate world. We center around our objectives on customer's business techniques and their work procedures, and afterward, map them as indicated by our work model. 
                <br /><br />
                Our client approach is exceptionally direct yet best. Our whole office staff is liable for supporting to our customers whenever. 
                <br /><br />
                We give a best workplace and furthermore empower collaborations through instruction or preparing software engineers, development openings and adequet awards for their best exhibitions. Don't hesitate to Call Us to find out about our organization, administrations and abilities.
              </p>
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
