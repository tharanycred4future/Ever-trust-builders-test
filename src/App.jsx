import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



import Home from './pages/Home/Home'
import About from './pages/About/About'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import ContactUs from './pages/ContactUs/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'




import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation happens only once
    });
  }, []);

  return (
    <>
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<ServicesPage/>} />
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
    </Routes>
    </div>
     
     <Footer/>
    </>
  )
}

export default App
