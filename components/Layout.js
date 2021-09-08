
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Index3.module.css'

const Layout = ({children}) => {
   return (
     <>
     <Navbar />
     <main className={styles.main}>
         {children}
     </main>
     <Footer />

     </>
   )

}

export default Layout