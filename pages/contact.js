
// Your component in pages/index.js
import { useState } from 'react';


export default function Home() {
  const [formState, setFormState] = useState({
    iname: '',
    icontact: '',
    iemail: '',
    iquery: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data directly to your API using fetch
      const response = await fetch('https://mysticalvalleyreality.in/webfinderdata.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        // Reset the form after successful submission
        setFormState({
          iname: '',
          icontact: '',
          iemail: '',
          iquery: '',
        });
        alert('Form submitted successfully.');
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error(error);
      alert('Form submission failed.');
    }
  };

  return (
    <div className="">
     
      <main>
    

      
      
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
                <p style={{color: 'white !important'}}>+91 (124) 301-2575</p>
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

                <form onSubmit={handleSubmit}>
      {/* Include your form input fields with appropriate names and value attributes */}
      <div className="form-group">
      <input
        type="text"
        name="iname"
        value={formState.iname}
        onChange={handleChange}
        placeholder="Name"
        style={{height: '50px !important'}}
        className=" form-control  mx-auto"
      />
      </div>

      <div className="form-group">
      <input
        type="text"
        name="icontact"
        value={formState.icontact}
        onChange={handleChange}
        placeholder="Contact"
        style={{height: '50px !important'}}
        className=" form-control  mx-auto"
      />
      </div>

      <div className="form-group">
      <input
        type="text"
        name="iemail"
        value={formState.iemail}
        onChange={handleChange}
        placeholder="Email"
        style={{height: '50px !important'}}
        className=" form-control  mx-auto"
      />
                          <small id="emailHelp" className="form-text text-muted text-center">We'll never share your email with anyone else.</small>

      </div>

      <div className="form-group">
 
         <textarea
        name="iquery"
        rows="6"
        className=" form-control  mx-auto" 
        cols="60"
        value={formState.iquery}
        onChange={handleChange}
        placeholder="Describe Your Query"

        required
      ></textarea>
      </div>
      {/* Add other form fields similarly */}
      <button type="submit" className=" submit-btn">Submit</button>
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
