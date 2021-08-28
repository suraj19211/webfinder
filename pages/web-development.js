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
