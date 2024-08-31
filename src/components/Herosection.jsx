import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import Image1 from '../assets/hero.jpg'
import logofin from '../assets/logofin.png'

const Herosection = () => {
  return (
    <div style={{ backgroundColor: "#1e1e1e", color: "#ffffff", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <header style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="logofin" style={{ fontSize: "24px", fontWeight: "bold" }}> <img src={logofin} alt=""  /> <p>CII Threat Monitor</p></div>
        <nav>
          <a href="/" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Home</a>
          <Link to="/dashboard" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Threat Dashboard</Link>
          <Link to="/report" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>Report Incident</Link>
        </nav>
      </header>

      <div className="hero-mid" style={{display:'flex',justifyContent:'center'}}>
      <section style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "" ,width:'60%'}}>
        <img src={Image1} alt="Cyber Threat" style={{ width: "100%", marginBottom: "20px" }} />
        <h1>Welcome to CII Threat Monitor</h1>
        <p>Stay updated with real-time cyber threat information specific to the Indian cyber space.</p>
      </section>
      </div>

      <section style={{ display: "flex", justifyContent: "space-around", padding: "40px 0", backgroundColor: "#121212" }}>
        <div style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faShieldAlt} size="4x" color="#00aaff" />
          <h2>Total Threats Detected</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>5,432</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faCheckCircle} size="4x" color="#00aaff" />
          <h2>Threats Mitigated</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>4,876</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faExclamationTriangle} size="4x" color="#00aaff" />
          <h2>Active Threats</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>556</p>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "20px", backgroundColor: "#1e1e1e" }}>
        <button style={{ padding: "10px 20px", fontSize: "18px", backgroundColor: "#007bff", color: "#ffffff", border: "none", borderRadius: "5px" }}>
          <Link to='/landing'>Access Threat Dashboard</Link>
        </button>
      </section>

      {/* <footer style={{ display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#0d0d0d" }}>
        <div>
          <p>Contact Us</p>
          <p>Email: <a href="mailto:support@ciithreatmonitor.in" style={{ color: "#00aaff" }}>support@ciithreatmonitor.in</a></p>
          <p>Phone: +91-1234-567890</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Follow Us</p>
          <div style={{ marginLeft: "10px" }}>
            <a href="https://twitter.com" style={{ color: "#00aaff", marginRight: "10px" }}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://facebook.com" style={{ color: "#00aaff", marginRight: "10px" }}><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
            <a href="https://linkedin.com" style={{ color: "#00aaff" }}><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Herosection;