import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



import Home from './pages/Home/Home'


function App() {
  

  return (
    <>
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
    </div>
     
     <Footer/>
    </>
  )
}

export default App
