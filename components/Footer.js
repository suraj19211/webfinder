import Link from 'next/link';

 const Footer = () => {
    return (
      <>


      <div>
        <style dangerouslySetInnerHTML={{__html: "\n.icon-bar{\n\tposition: fixed;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\t-webkit-transform: translateY(-50%);\n\t-ms-transform: translateY(-50%);\n\tz-index: 10;\n\tleft:100%;\n}\n\n.icon-bar a{\n  text-decoration: none !important;\n  width: 180px;\n  background:#3b5999;\n  color: #fff;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding:3px;\n  transform:translateX(-40px);\n -webkit-transform:translateX(-40px);\n-ms-transform:translateX(-40px);\n\ntransition:0.5s linear;\n -webkit-transition:0.5s linear;\n-ms-transition:0.5s linear;\n}\n\n.icon-bar a:hover{\n\t transform:translateX(-180px);\n -webkit-transform:translateX(-180px);\n-ms-transform:translateX(-180px);\n}\n\n.icon-bar a i{\n\tpadding-left: 4px;\n\tpadding-right: 8px;\n\tfont-size: 30px !important;\n\tanimation: letszoom 3s linear alternate-reverse infinite;\n}\n.cform{\n\tborder-radius: 25px !important;\n\twidth:80%;\n\talign-items: center;\n}\n@keyframes letszoom{\n\nfrom{\n\ttransform: scale(0.8);\n\n}\n\nto{\n\ttransform: scale(1);\n}\n}\n\n.anim-content::before { \n            content: \"Expand your Brand\"; \n            animation: animate infinite 3s; \n            transition: 0.4s;\n            padding-left: 10px; \n        } \n  \n        @keyframes animate { \n  \n            0% { \n                content: \"Expand Your Brand\"; \n            } \n  \n            50% { \n                content: \"Let's Connect\"; \n            } \n  \n            75% { \n                content: \"Speak To Us\"; \n            } \n        } \n\n        .lform{\n\tdisplay: none;\n}\n\n.fform{\n\tborder-bottom:1px solid #58595B !important;\n\tdisplay: inline;\n\tborder:0px solid #343A40;\n\tbackground-color: #343A40 !important;\n\tcolor: white !important;\n}\n\n\n.ml {\n\twidth: 100% !important;\n\theight: 100% !important;\n\tbackground-color: black !important;\n\t\n}\n\n.close{\n\t\n\tcolor: black !important;\n    background-color: #ffffff !important;\n}\n\n" }} />
        <footer className="page-footer font-small bg-dark py-5">
          
          <div className="container text-center text-md-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links --
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ">Links</h5>  -*/}
                <ul className="list-unstyled mt-3 mb-4 ">
                  <li>
                    <Link href=""><a href="https://www.webfinder.in/web.php" className="footer-links">Web Development</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="https://www.webfinder.in/digital-marketing.php" className="footer-links">Digital Marketing</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="https://www.webfinder.in/ecommerce.php" className="footer-links">Ecommerce Development</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="https://www.webfinder.in/digital-marketing.php" className="footer-links">Seo Services</a></Link>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                {/*-- <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5> -*/}
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <Link href=""><a href="https://www.webfinder.in/service.php" className="footer-links">App Development</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="#" className="footer-links">Carrier</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="blog/index.php" className="footer-links">Blog</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="service.php" className="footer-links">Our Services</a></Link>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                {/*-- <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5> --*/}
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <Link href=""><a href="portfolio.php" className="footer-links">Our Work</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="about.php" className="footer-links">About Us</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="contact" className="footer-links">Contact Us</a></Link>
                  </li>
                  <li>
                    <Link href=""><a href="pricing.php" className="footer-links">Pricing</a></Link>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <span style={{color: 'white'}}>
                      Webfinder</span>
                  </li>
                  <li>
                    <span style={{color: 'white'}}>	Dehradun<br /> Uttrakhand 248001<br />support@Webfinder.in
                    </span>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          {/* Footer Links */}
          {/* Copyright */}
          <div className="footer-copyright text-center py-3 text-light">© 2019 - 2021 Copyright:
            <Link href=""><a href="https://Webfinder.in/" style={{textDecoration: 'none', color: 'white'}}> Webfinder.in</a></Link>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
        {/* Messenger Chat plugin Code */}
        <div id="fb-root" />
        {/* Your Chat plugin code */}
        <div id="fb-customer-chat" className="fb-customerchat">
        </div>
        <style  jsx>{`

        a{
          text-decoration:none;
        }
.footer-links{
  color:white;
  font-size:21px;
  margin-bottom:10px;
}
      `}</style>


      </div>
    
      </>
    );
  };

  export default Footer