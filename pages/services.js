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
          <h2 className="text-center text-uppercase text-warning " style={{fontSize: '60px !important', fontWeight: 700}}>Our Services </h2>
        </div>
        {/*---------------------Title End -----------------*/}
        <div className="container mt-5">
          <h2 className="text-center font-weight-bold text-uppercase mt-2">we specialized in<span className="underline-magical"> perfect web design</span> </h2>  <br />  
          <hr className="divider" /><br />
          <p className="  text-justify">Web Finder is a multi-skilled website architecture and improvement organization that offers a wide exhibit of web administrations incorporating Professional site Designing in Dehradun, Top quality site upgrading, Development of database driven sites and web applications advancement, Content administration systems(CMS) advancement, Logo Designing, Corporate personality planning, Full highlighted vivified site, best site design improvement and site upkeep administration in Dehradun. Literally nothing is redistributed, which mean you could have a completely specially designed brilliant looking site from one spot.
          </p>
        </div>
        {/*------------Services---------*/}
        <div className="container mt-5">
          <h2 className="text-center font-weight-bold text-uppercase mt-2">our <span className="underline-magical"> services</span> </h2>  <br />  
          <hr className="divider" /><br />
          {/*----------row---------*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-laptop-code text-dark fa-2x" /></h2>
              <h4 className="text-center"> Custom Website Design</h4>
              <p className="text-justify">You may have an extraordinary item or administration, however in absence of legitimate online introduction it wont contact its crowd. This is the place our custom website composition skill and experience comes into picture. We can make an astounding looking exclusively customized site for you to catch your guest's eye and keeping him intrigued by your item.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-shopping-cart text-dark fa-2x" /></h2>
              <h4 className="text-center"> E-Commerce Solutions</h4>
              <p className="text-justify">If you are interested in selling services or products on your website, then an e-commerce website is for you. We use several different e-commerce development framework. We create best e-commerce website's in Dehradun, which will be both user-friendly and stand out from your competition.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-desktop text-dark fa-2x" /></h2>
              <h4 className="text-center">Responsive Website Development</h4>
              <p className="text-justify">With more people using their smart-phone and tablet to browse the Internet, you need to be sure your website looks best on all screen sizes without loosing its functionality. We not only integrate responsive design in your new website design, but if you already have a website, we can transform your website and make it responsive. We provide top responsive website development in Dehradun.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-wallet text-dark fa-2x" /></h2>
              <h4 className="text-center"> Payment Gateway Integration</h4>
              <p className="text-justify">Whether you have a small website, a large web portal or an educational institute, accepting cashless online payments is a great convenience for the clients visiting your website. we offer best payment gateway integration services in Dehradun for your website using various banks and payment gateway's API's.</p>
            </div>
            {/*-------- box end -----------*/}
          </div>
          {/*--------- row end --------------*/}
          <hr />
          {/*----------row---------*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-cogs text-dark fa-2x" /></h2>
              <h4 className="text-center"> Custom CMS Development</h4>
              <p className="text-justify">A website content management system (CMS) has a great functionality when it comes to manage a website with ease-of-access on your own. We specialized in development of custom content management system along with expertise to custom theme and modify an open source CMS like wordpress, zoomla, drupal and many more.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-bullseye text-dark fa-2x" /></h2>
              <h4 className="text-center"> Web Development</h4>
              <p className="text-justify">Have you been thinking about adding something to your site but keep putting it off? be it a products catalogue or may be an online billing system on your website for your services. Web based applications provides great functionality including collecting leads for your business as well as providing better interaction with your visitors. We offer custom web application development in Dehradun with latest web technologies available to improve your productivity and business.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-chart-bar text-dark fa-2x" /></h2>
              <h4 className="text-center">Search Engine Optimization - SEO</h4>
              <p className="text-justify">You already have a great website, but now that you have it nobody is seeing it. We'll work with you to enhance your website's design and content in order to maximize your website's search engine ranking potential. Because Google is always making changes to its ranking algorithm, being on the first page of the SERPs is trickier than it seems. With our Best in-class Search Engine Optimization (SEO) service in Dehradun we ensure that your website ticks all the important ranking factors used by Google and other search engines.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-database text-dark fa-2x" /></h2>
              <h4 className="text-center"> Webhosting Services</h4>
              <p className="text-justify">Owning a sports car and driving it on a badly damaged village road is not what you want? do you? Heaving a website which is aesthetically pleasing and great in functionality will only fulfill its purpose when you host it on a fast, reliable and secure web hosting server. We provide best web hosting services in Dehradun which includes faster page loading, secure emailing with latest software and hardware installed on the server, from some of the top web hosting companies in the world.</p>
            </div>
            {/*-------- box end -----------*/}
          </div>
          {/*--------- row end --------------*/}
          <hr />
          {/*----------row---------*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-comments text-dark fa-2x" /></h2>
              <h4 className="text-center">Bulk SMS Service</h4>
              <p className="text-justify">All sorts of communication boost business performance, SMS is one of the most powerful communication media because its a mobile phone era and the most powerful business tool is a mobile phone these days. We offer best bulk SMS services in Dehradun with a dedicated front-end panel for you to send bulk SMS. Our bulk SMS Service also provide an API to integrate SMS into your website's auto communication system or in your web application.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-mobile text-dark fa-2x" /></h2>
              <h4 className="text-center"> App Development</h4>
              <p className="text-justify">Transform your business ideas into mobile applications with Web Finder. Mobile application development arena being one of the most innovative spaces in the industry today holds the prospect for the future of business. We make mobile apps for multiple-platforms like Android, iOS and cross-platform solutions in Xamarin, PhoneGap, etc. Our mobile app development team has a long streak in releasing foolproof, quality applications in the Google Playstore and iOS app stores. We also provide custom mobile app solutions to restore any setbacks in your everyday businesses.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-chart-line text-dark fa-2x" /></h2>
              <h4 className="text-center">Digital Marketing &amp; Analytics</h4>
              <p className="text-justify">Great content does not enjoy automatic visibility. The success of any website lies in the in-depth analysis of data and trends to understand what is working and what is not, thats why we provide best analytics and digital marketing services in Dehradun to help you measure your ROI by providing reports on conversion rates, analytics, and visibility.</p>
            </div>
            {/*-------- box end -----------*/}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <h2 className="text-center"><i className="fas fa-laptop text-dark fa-2x" /></h2>
              <h4 className="text-center"> Website Redisigning</h4>
              <p className="text-justify">We all know web technology and trends change often and fast online, to keep up the pace and stay in race you need to upgrade. If you already have a website which you don't feel is representing your product or services in the manner it should and also not fairly visible in search engines, well you've come to the right place, We offer best website redesigning services in Dehradun with latest coding trends &amp; technologies.</p>
            </div>
            {/*-------- box end -----------*/}
          </div>
          {/*--------- row end --------------*/}
          <hr />
        </div>
        {/*----------- Side bar ---------------*/}
        {/*?php include 'sidebar.php' ?*/}
        {/*----------------- Footer Start -------------*/}
      
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
