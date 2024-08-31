import { useState } from 'react'
import './App.css'
// import Nav from './components/Nav.jsx'
// import Nav2 from './components/Nav2.jsx'
import {Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx'
import Herosection from './components/Herosection.jsx'
import Landing from './components/Landing.jsx'
// import './NavBar.css'
import ReportIncident from './components/ReportIncident.jsx'

function App() {

  return (
    <>

      {/* <Nav/> */}
      {/* <Nav2/> */}
      {/* <Herosection/>
      <Landing/>
      // <ReportIncident/> */}

      <Routes>
      <Route path="/" exact element={<Herosection/>} />
      <Route path="/landing" element={<Landing/>} />
      <Route path="/report" element={<ReportIncident/>} />
      </Routes>

      <Footer/>


    </>
  )
}

export default App