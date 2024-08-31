import React from "react";
import "./landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import {Image1} from '../assets/Incident-response.jpeg'
import L1 from '../assets/L1.jpg'
import L2 from '../assets/L2.jpg'
import L3 from '../assets/L3.jpg'
import L4 from '../assets/L4.jpg'
import L5 from '../assets/L5.jpg'
import L6 from '../assets/L6.jpg'
import L7 from '../assets/L7.jpg'
import L8 from '../assets/L8.jpg'
import L9 from '../assets/L9.jpg'
import L10 from '../assets/L10.jpg'
import L11 from '../assets/L11.jpg'


const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Stay updated with the latest cyber threats.</h1>
        <div className="header-actions">
          <button className="login-btn">Log in</button>
          <button className="get-updates-btn">Get updates</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for cyber threats" />
        </div>
      </header>

      <section className="filters">
        <button className="filter-btn active">Incidents</button>
        <button className="filter-btn">India</button>
        <button className="filter-btn">Security</button>
        <button className="filter-btn">Technology</button>
        <button className="filter-btn">News</button>
        <button className="filter-btn">Response</button>
      </section>

      <section className="incident-reports">
        <div className="main-article">
          <div className="report-title">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <h2>Cyber Alert: Insights on Indian cyberspace</h2>
            <div className="author">
              <img src="" alt="Author" />
              <span>Rahul Sharma</span>
            </div>
          </div>
          <img src={L5} alt="Cyber Alert" className="article-image" />
        </div>
        <div className="other-articles">
          <div className="article">
            <img src={L1} alt="Article 1" />
            <h3>Top cybersecurity tools for Indian enterprises</h3>
            <p>Secure Networks</p>
            <span>13 June 2023</span>
          </div>
          <div className="article">
            <img src={L2} alt="Article 2" />
            <h3>Cyber expert uncovers new threat</h3>
            <p>Anu Singh</p>
            <span>14 June 2023</span>
          </div>
          <div className="article">
            <img src={L3} alt="Article 3" />
            <h3>Major cyberattack disrupts Indian enterprises</h3>
            <p>Sanjay IT</p>
            <span>14 June 2023</span>
          </div>
        </div>
      </section>

      <section className="cybersecurity-trends">
        <div className="section-header">
          <h2>Cybersecurity Trends</h2>
          <button className="view-all-btn">View all</button>
        </div>
        <div className="trends-articles">
          <div className="trend-article">
            <img src={L4} alt="Trend 1" />
            <h3>Exploring cyber threats in India</h3>
            <p>Anu Singh</p>
            <span>13 June 2023</span>
          </div>
          <div className="trend-article">
            <img src={L6} alt="Trend 2" />
            <h3>Indian cyber landscape: Risks</h3>
            <p>Rahul Sharma</p>
            <span>13 June 2023</span>
          </div>
          <div className="trend-article">
            <img src={L7} alt="Trend 3" />
            <h3>Cybersecurity on a budget</h3>
            <p>Rahul Sharma</p>
            <span>13 June 2023</span>
          </div>
          <div className="trend-article">
            <img src={L8} alt="Trend 4" />
            <h3>Securing Indian cyberspace</h3>
            <p>Anu Singh</p>
            <span>13 June 2023</span>
          </div>
        </div>
      </section>

      <section className="editorial-selections">
        <h2>Editorial selections</h2>
        <div className="editorial-articles">
          <div className="editorial-article">
            <span className="editorial-number">1</span>
            <img src={L9} alt="Editorial 1" />
            <h3>Cyber resilience in India: A success story</h3>
            <p>Rahul Sharma</p>
          </div>
          <div className="editorial-article">
            <span className="editorial-number">2</span>
            <img src={L10} alt="Editorial 2" />
            <h3>Indian Cybersecurity Summit 2023 is here</h3>
            <p>Sanjay IT</p>
          </div>
          <div className="editorial-article">
            <span className="editorial-number">3</span>
            <img src={L11} alt="Editorial 3" />
            <h3>Revolutionizing cyber education</h3>
            <p>Priya Security</p>
          </div>
        </div>
      </section>    

      {/* <footer className="footer">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>About</h3>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-section">
            <h3>Legal Disclaimer</h3>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookie Notice</p>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <p>Delivery Information</p>
            <p>Return Policy</p>
            <p>Secure Payment</p>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © CyberThreatIndia 2023</p>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;
