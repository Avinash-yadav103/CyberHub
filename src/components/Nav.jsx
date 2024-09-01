import React from "react";
import "./NavBar.css"; 
import { Link } from 'react-router-dom';
import Image1 from '../assets/hero.jpg'
import logofin from '../assets/logofin.png'
import './NavBar.css'
// import '../assets/landing.css'

const Nav = () => {
  // Function to handle the search action
  const searchFunction = () => {
    const query = document.getElementById("search-bar").value;
    if (query) {
      alert("You searched for: " + query);
      // Implement actual search logic here
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
      <>

        <header style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center",    backgroundColor: "#1E1E1E" }}>
        <div className="logofin" style={{ fontSize: "24px", fontWeight: "bold" }}> <img src={logofin} alt=""  /> <p>CII Threat Monitor</p></div>
        <nav>
          <Link to="/" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Home</Link>
          <Link to="/search" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Search</Link>
          <Link to="/article" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Articles</Link>
          <Link to="/stats" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Threat Stats</Link>
          <Link to="/report" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Report Incident</Link>
        </nav>
        </header>

          {/* <nav className="navbar">

      <div className="navbar-logo">
        <h1>CyberSafe</h1> 
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for cyber threat data..."
          aria-label="Search"
          id="search-bar"
        />
        <button type="button" onClick={searchFunction}>
          Search
        </button>
      </div>

      <div className="nav-right">
        <div className="navbar-login">
        <a href="/login">Login</a>
      </div>
      <div className="navbar-login">
        <a href="/login">Donate OR Get Updates</a>
      </div></div>
    </nav> */}

      
      </>
  );
};

export default Nav;

