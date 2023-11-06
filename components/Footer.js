import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div>
        <style dangerouslySetInnerHTML={{__html: `
\n.icon-bar{\n\tposition: fixed;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\t-webkit-transform: translateY(-50%);\n\t-ms-transform: translateY(-50%);\n\tz-index: 10;\n\tleft:100%;\n}\n\n.icon-bar a{\n  text-decoration: none !important;\n  width: 180px;\n  background:#3b5999;\n  color: #fff;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding:3px;\n  transform:translateX(-40px);\n -webkit-transform:translateX(-40px);\n-ms-transform:translateX(-40px);\n\ntransition:0.5s linear;\n -webkit-transition:0.5s linear;\n-ms-transition:0.5s linear;\n}\n\n.icon-bar a:hover{\n\t transform:translateX(-180px);\n -webkit-transform:translateX(-180px);\n-ms-transform:translateX(-180px);\n}\n\n.icon-bar a i{\n\tpadding-left: 4px;\n\tpadding-right: 8px;\n\tfont-size: 30px !important;\n\tanimation: letszoom 3s linear alternate-reverse infinite;\n}\n.cform{\n\tborder-radius: 25px !important;\n\twidth:80%;\n\talign-items: center;\n}\n@keyframes letszoom{\n\nfrom{\n\ttransform: scale(0.8);\n\n}\n\nto{\n\ttransform: scale(1);\n}\n}\n\n.anim-content::before { \n            content: \"Expand your Brand\"; \n            animation: animate infinite 3s; \n            transition: 0.4s;\n            padding-left: 10px; \n        } \n  \n        @keyframes animate { \n  \n            0% { \n                content: \"Expand Your Brand\"; \n            } \n  \n            50% { \n                content: \"Let's Connect\"; \n            } \n  \n            75% { \n                content: \"Speak To Us\"; \n            } \n        } \n\n        .lform{\n\tdisplay: none;\n}\n\n.fform{\n\tborder-bottom:1px solid #58595B !important;\n\tdisplay: inline;\n\tborder:0px solid #343A40;\n\tbackground-color: #343A40 !important;\n\tcolor: white !important;\n}\n\n\n.ml {\n\twidth: 100% !important;\n\theight: 100% !important;\n\tbackground-color: black !important;\n\t\n}\n\n.close{\n\t\n\tcolor: black !important;\n    background-color: #ffffff !important;\n}\n\n}} />
`}} />

        <footer className="page-footer font-small bg-dark py-5">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-3 mx-auto">
                <ul className="list-unstyled mt-3 mb-4">
                  <li style={{color:'white'}}>
                    Web Development
                  </li>
                  <li style={{color:'white'}}>
                    Digital Marketing
                  </li>
                  <li style={{color:'white'}}>
                    Ecommerce Development
                  </li>
                  <li style={{color:'white'}}>
                    Seo Services
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-3 mx-auto">
                <ul className="list-unstyled mt-3 mb-4">
                  <li style={{color:'white'}}>
                    App Development
                  </li>
                  <li style={{color:'white'}}>
                    Carrier
                  </li>
                  <li style={{color:'white'}}>
                    Blog
                  </li>
                  <li style={{color:'white'}}>
                    Our Services
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-3 mx-auto">
                <ul className="list-unstyled mt-3 mb-4">
                  <li style={{color:'white'}}>
                    Our Work
                  </li>
                  <li style={{color:'white'}}>
                    About Us
                  </li>
                  <li style={{color:'white'}}>
                    Contact Us
                  </li>
                  <li style={{color:'white'}}>
                    Pricing
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-3 mx-auto">
                <ul className="list-unstyled mt-3 mb-4">
                  <li style={{color:'white'}}>
                    <span style={{color: 'white'}}>
                      Webfinder
                    </span>
                  </li>
                  <li style={{color:'white'}}>
                    <span style={{color: 'white'}}>
                    P301, 3rd Floor, Doon Business Park, Transport Nagar, Dehradun - 248001<br></br>
call: +91 9368620233 <br></br> Mail: info@webfinder.in
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3 text-light">
            © 2018 - 2023 Copyright: Webfinder.in
          </div>
        </footer>

        <div id="fb-root" />
        <div id="fb-customer-chat" className="fb-customerchat" />
        <style jsx>{`
          /* Your additional CSS styles here */
        `}</style>
      </div>
    </>
  );
};

export default Footer;
