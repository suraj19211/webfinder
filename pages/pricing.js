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
          <h2 className="text-center text-uppercase color-white" style={{fontSize: '39 !important', fontWeight: 700}}>Yearly Plans </h2>
        </div>
        {/*------------------- Title End-------------------------*/}
        <div className="container text-center py-5 " id="products">
          <p className="text-center" style={{fontSize: '24px !important'}}>WEBFINDER gives unlimited services, best online Business Solutions &amp; top grade business assist FREE, Upgrade your business to Premium and get even more ...
          </p>
        </div>
        {/*---------  website plan--------*/}
        <div className="container-fluid" style={{paddingBottom: '100px !important'}}>
          {/* <h2 class ="text-center text-uppercase"> Website Designing</h2>
  <br>
  <hr class="divider"><br> */}
          <div className="row " style={{paddingRight: '14px', paddingLeft: '14px'}}>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12  mb-3">
              <div className="p-3 inner-div" style={{backgroundColor: '#222222 !important'}}>
                {/*--------------------------------*/}
                <div className="planWrapper  ">
                  <div className=" heroSection">
                    <h1 className="text-center plan" style={{color:'white'}}>Startup</h1>
                    <h2 className="text-center py-2 price" style={{fontWeight: 700}}>₹ 22,000</h2>
                    <div className="text-center py-4 " style={{paddingBottom: '50px !important'}}> <a className="text-center get-btn" href="contact.php">GET STARTED </a></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>1 Basic Dynamic Website (*Unlimited Pages) + 1 Free Domain + 1 Free Hosting</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>3 GB&nbsp;Bandwidth</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>3 GB Storage</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>1 Free Lifetime SSL Certificate</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>1 Payment Gateway Integration With Website<span style={{color: 'rgb(153, 153, 153)'}} /></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>Search Engine Optimisation (SEO) - Normal Level For 1 Keyword</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>Google Analytics Account Integration With Website</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>3 Business Consultation</p><p /></div>
                  </div>
                  {/*    <div class="featureContainer ">
                        <div class="fitText"><p>Business Profile/ Pages Creation &amp; Management on Popular Channels i.e Facebook + Instagram + Google + Bing + Medium + Pinterest + Twitter + LinkedIn etc.</p></div>
                    </div> */}
                </div>
                {/*------------------------------------*/}
              </div>{/*m--*/}
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-3 "> 
              <div className="p-3 inner-div" style={{backgroundColor: '#222222 !important'}}>
                {/*--------------------------------*/}
                <div className="planWrapper  ">
                  <div className=" heroSection">
                    <h1 className="text-center plan" style={{color:'white'}}>Normal</h1>
                    <h2 className="text-center py-2 price" style={{fontWeight: 700}}>₹ 35,000</h2>
                    <div className="text-center py-4 " style={{paddingBottom: '50px !important'}}> <a className="text-center get-btn" href="contact.php">GET STARTED </a></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>1 Normal Dynamic Website (*Unlimited Pages) + 1 Free Domain + 1 Free Hosting</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>3 GB&nbsp;Bandwidth</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>3 GB Storage</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>1 Free Lifetime SSL Certificate</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>1 Payment Gateway Integration With Website<span style={{color: 'rgb(153, 153, 153)'}} /></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>Search Engine Optimisation (SEO) - Normal Level For 1 Keyword</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>Google Analytics Account Integration With Website</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>3 Business Consultation</p><p /></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>Business Profile/ Pages Creation &amp; Management on Popular Channels i.e Facebook + Instagram + Google + Bing + Medium + Pinterest + Twitter + LinkedIn etc.</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="fitText"><p>Social Media Management Only &amp; (Facebook + Instagram Daily Graphics Posts)</p></div>
                  </div>
                </div>
                {/*------------------------------------*/}
              </div>{/*m--*/}
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-3 "> 
              <div className="p-3 inner-div" style={{backgroundColor: '#222222 !important'}}>
                {/*--------------------------------*/}
                <div className="planWrapper  ">
                  <div className=" heroSection">
                    <h1 className="text-center plan" style={{color:'white'}}>Business</h1>
                    <h2 className="text-center py-2 price" style={{fontWeight: 700}}>₹ 60,000</h2>
                    <div className="text-center py-4 " style={{paddingBottom: '50px !important'}}> <a className="text-center get-btn" href="contact.php">GET STARTED </a></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>1 <span style={{color: '#81c784'}}><strong>AI Based</strong></span> Ultra-Advanced Dynamic Website + 1 Free Domain + 1 Free Dedicated Hosting</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>Unlimited Pages Designing &amp; Development</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>Unlimited&nbsp;Advanced Bandwidth</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>75 GB SSD Hosting Storage</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p> Support 24/7/365</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>Social Media Management&nbsp;&amp; <strong>Top&nbsp;Online Promotions </strong><span style={{color: '#f1f1f1'}}>(Facebook + Twitter + LinkedIn + YouTube + Instagram)</span></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>Search Engine Optimisation (SEO) - Best Level (International + Domestic Level) <strong>Product, Pages &amp; Category Wise + Experts Review + *Unlimited Keywords(&lt; 30) Optimization</strong></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>5 G SUITE E-mail Official&nbsp;Business Account With 30 GB Storage Each</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>12 Facebook Advertisement / Month - Page Boost/ Post Boost/ Lead Generation Ads </p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>Google Analytics Account + Google Tag Manager + Yandex + JSON LD + Facebook Pixel + Google Ads + Google Login + Facebook Login + Email Login + Live Testimonials (Video + Text) + 1 Payment Gateway + 1 API Integration With&nbsp;Website</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>1 Premium SSL Certificate</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>1 Dedicated Account Manager</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>3 Months Unlimited Google&nbsp;Campaign Management</p><p><span style={{color: 'rgb(153, 153, 153)'}}>*Based on your business&nbsp;requirement</span></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>Promisely Top Ranking on Google For Business Oriented Keywords</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText"><p>Business Profile/ Pages Creation &amp; Management on Popular Channels i.e Facebook + Instagram + Google + Bing + Medium + Pinterest + Twitter + LinkedIn etc.</p></div>
                  </div>
                </div>
                {/*------------------------------------*/}
              </div>{/*m--*/}
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12  "> 
              <div className="p-3 inner-div" style={{backgroundColor: '#222222 !important'}}>
                {/*--------------------------------*/}
                <div className="planWrapper  ">
                  <div className=" heroSection">
                    <h1 className="text-center plan" style={{color:'white'}}>Ecommerce</h1>
                    <h2 className="text-center py-2 price" style={{fontWeight: 700}}>₹ 85,000</h2>
                    <div className="text-center py-4 " style={{paddingBottom: '50px !important'}}> <a className="text-center get-btn" href="contact.php">GET STARTED </a></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>1 Advanced Dynamic E-Commerce Store (Unlimited Products + Pages) + 1 Free Domain + Unlimited Sub-domains + 1 Free Hosting + 1 Lifetime Free SSL Certificate</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>15 GB Hosting Bandwidth</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>30 GB SSD Hosting Storage</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>Social Media Management&nbsp;&amp; <strong>Online Promotions</strong> <span style={{color: '#000000'}}>(Facebook + Instagram + YouTube)</span></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>Search Engine Optimisation (SEO) - Best Level (Domestic + International Level) <strong>Product &amp; Category Wise </strong>Limited to 10 keywords</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '11px'}}><p style={{fontSize: '11px'}}>7 G SUITE E-mail Official&nbsp;Business Account With 30 GB Storage Each</p><p style={{fontSize: '11px'}}><span style={{color: '#716e6e'}}>(info@yourwebsite.com / sales@yourwebsite.com)</span></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>5 E-mail Campaigning / Month</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>6 Facebook Advertisement / Month - Page Boost + Post Boost + Advanced Sales Ads + Lead Generation Ads</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>Google Analytics Account + Google Tag Manager + Yandex + Store + Facebook Pixel + Google Ads + JSON LD + Product Star Ratings With Categorizations (JSON) Integration With Store</p></div>
                  </div>
                  {/*<div class="featureContainer ">*/}
                  {/*<div class="feature fitText" style="font-size: 13px;"><p style="font-size: 13px;">12 Business Consultation</p><p style="font-size: 13px;"><span style="color:rgb(153, 153, 153)"></span></p></div>*/}
                  {/*</div>*/}
                  {/*  <div class="featureContainer ">
                        <div class="feature fitText" style="font-size: 13px;"><p style="font-size: 13px;">Free Worth $200 USD Bing/ Google Ads&nbsp;Campaigning Voucher</p></div>
                    </div> */}
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>Promisely Top Ranking on Google With Chosen Keywords</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>1 Dedicated Account Manager</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>1 Dedicated Project Manager Along With 4 Expert Developer &amp; Designer</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>1 Dedicated SMM (Social Media Marketing)/ Google Ads Manager</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>1 Cloud Based Advanced Business Management + Inventory Management Software <span style={{color: '#81c784'}}>(AI Based Software)</span></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>2 Payment Gateway Integration With Website &amp; Live Data Sync System With Business Management Software</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>12 Months Unlimited Google&nbsp;Campaign Management</p><p style={{fontSize: '13px'}}><span style={{color: 'rgb(153, 153, 153)'}}>*Based on your business&nbsp;requirement</span></p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>Monthly Business Health Check up &amp; Implementations</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>Monthly + Quarterly Business ROI Reports</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>1 Web-Based Android &amp; ios E-commerce Application</p></div>
                  </div>
                  <div className="featureContainer ">
                    <div className="feature fitText" style={{fontSize: '13px'}}><p style={{fontSize: '13px'}}>Business Profile/ Pages Creation &amp; Management on Popular Channels i.e Facebook + Instagram + Google + Bing + Medium + Pinterest + Twitter + LinkedIn etc.</p></div>
                  </div>
                </div>
              </div>{/*-------dddd------*/}
            </div>
            {/*------------Web design end ------*/}
            <div className="py-4 text-center text-danger mx-auto">
              Note:  Social Media management and google ads in business and Ecommerce Package are only for 2 months
            </div>
          </div>      {/*-- row ---------*/}             
        </div>{/*---------conatainer-------*/}
      <Footer/>
      
        <style  jsx>{`

.inner-div{
border-radius: 12px;box-shadow: 0 40px 125px rgb(0 0 0 / 7%) !important;padding-bottom: 80px; 
background:#222222;
}
.plan{
  font-size: 34px;font-weight: 700;padding-top: 30px;color: white !important;
}

.get-btn{
  background-color: #20d279 !important;color: white !important;border-radius: 25px;padding: 12px 16px !important;font-size: 18px !important;font-weight: 700 !important;text-decoration: none !important;
}
 
.fitText p{
  font-size: 15px !important;
  color: white !important;
  font-family: roboto !important;

}
.price{
  color: white !important;
}
.fitText{
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
