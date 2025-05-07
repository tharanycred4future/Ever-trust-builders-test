import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import BackToTopButton from './components/BackToTopButton/BackToTopButton'
import Blogs from './components/Blogs/Blogs'
import BlogOne from './components/BlogOne/BlogOne'
import BlogTwo from './components/BlogTwo/BlogTwo'




import Home from './pages/Home/Home'
import About from './pages/About/About'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import ContactUs from './pages/ContactUs/ContactUs'
import DesignGallery from './pages/DesignGallery/DesignGallery'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'
import RecentConstructionWorks from './pages/RecentConstructionWorks/RecentConstructionWorks'




import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // animation happens only once
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
      <Route path ='/design-gallery' element={<DesignGallery/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
      <Route path='/recent-construction-works' element={<RecentConstructionWorks/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/how-to-select-the-right-building-materials-for-your-project' element={<BlogOne/>}/>
      <Route path='/understanding-the-construction-timeline-what-to-expect-and-when' element={<BlogTwo/>}/>
    </Routes>
    </div>
     
     <Footer/>
     <BackToTopButton /> 
    </>
  )
}

export default App
