import React from "react";
import "./NavBar.css"; // Import the corresponding CSS file

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
          <nav className="navbar">
      {/* Logo Heading */}
      <div className="navbar-logo">
        <h1>CyberSafe</h1> 
      </div>

      {/* Search Bar */}
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

      {/* Login Section */}
      <div className="nav-right">
        <div className="navbar-login">
        <a href="/login">Login</a>
      </div>
      <div className="navbar-login">
        <a href="/login">Donate OR Get Updates</a>
      </div></div>
    </nav>

      
      </>
  );
};

export default Nav;

