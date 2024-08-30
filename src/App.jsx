import { useState } from 'react'
import './App.css'
// import Nav from './components/Nav.jsx'
// import Nav2 from './components/Nav2.jsx'
import Footer from './components/Footer.jsx'
import Herosection from './components/Herosection.jsx'
import Landing from './components/Landing.jsx'
// import './NavBar.css'

function App() {

  return (
    <>
      {/* <Nav/> */}
      {/* <Nav2/> */}
      <Herosection/>
      <Landing/>
      <Footer/>
    </>
  )
}

export default App