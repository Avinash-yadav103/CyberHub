import React from "react";
import "./landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import {Image1} from '../assets/Incident-response.jpeg'


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
              <img src="author-image.png" alt="Author" />
              <span>Rahul Sharma</span>
            </div>
          </div>
          <img src="main-article-image.png" alt="Cyber Alert" className="article-image" />
        </div>
        <div className="other-articles">
          <div className="article">
            <img src="article-1.png" alt="Article 1" />
            <h3>Top cybersecurity tools for Indian enterprises</h3>
            <p>Secure Networks</p>
            <span>13 June 2023</span>
          </div>
          <div className="article">
            <img src="article-2.png" alt="Article 2" />
            <h3>Cyber expert uncovers new threat</h3>
            <p>Anu Singh</p>
            <span>14 June 2023</span>
          </div>
          <div className="article">
            <img src="article-3.png" alt="Article 3" />
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
            <img src="" alt="Trend 1" />
            <h3>Exploring cyber threats in India</h3>
            <p>Anu Singh</p>
            <span>13 June 2023</span>
          </div>
          <div className="trend-article">
            <img src="trend-2.png" alt="Trend 2" />
            <h3>Indian cyber landscape: Risks</h3>
            <p>Rahul Sharma</p>
            <span>13 June 2023</span>
          </div>
          <div className="trend-article">
            <img src="trend-3.png" alt="Trend 3" />
            <h3>Cybersecurity on a budget</h3>
            <p>Rahul Sharma</p>
            <span>13 June 2023</span>
          </div>
          <div className="trend-article">
            <img src="trend-4.png" alt="Trend 4" />
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
            <img src="editorial-1.png" alt="Editorial 1" />
            <h3>Cyber resilience in India: A success story</h3>
            <p>Rahul Sharma</p>
          </div>
          <div className="editorial-article">
            <span className="editorial-number">2</span>
            <img src="editorial-2.png" alt="Editorial 2" />
            <h3>Indian Cybersecurity Summit 2023 is here</h3>
            <p>Sanjay IT</p>
          </div>
          <div className="editorial-article">
            <span className="editorial-number">3</span>
            <img src="editorial-3.png" alt="Editorial 3" />
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
