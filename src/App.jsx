import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
// import Nav2 from './components/Nav2.jsx'
import {Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx'
import Herosection from './components/Herosection.jsx'
import Landing from './components/Landing.jsx'
// import './NavBar.css'
import ReportIncident from './components/ReportIncident.jsx'
import Stats from './components/Stat.jsx'
import Search from './components/Search.jsx'
// import Gemini from './components/Gemini.jsx';
import ArticlePage from './components/ArticlePage.jsx';
// import Loading from './components/Loading.jsx';
import { GoogleGenerativeAI } from "@google/generative-ai";


function App() {

  const genAI = new GoogleGenerativeAI('');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  return (
    <>

      <Nav/>
      {/* <Nav2/> */}
      {/* <Herosection/>
      <Landing/>
      // <ReportIncident/> */}
      {/* <Gemini  /> */}
      {/* <ArticlePage/> */}
      <Routes>
        <Route path="/" exact element={<Herosection/>} />
        <Route path="/article" element={<ArticlePage/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/report" element={<ReportIncident/>} />
        <Route path="/stats" element={<Stats/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
        {/* <Stats/> */}
      <Footer/>


    </>
  )
}

export default App