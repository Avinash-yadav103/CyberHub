import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <div className="logo">

        </div>
        <h1>CyberThreatTracker</h1>
        <p>Stay ahead of Cyber Threats</p>
        <div className="logos_footer">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
        </div>
      </div>
      <div className="footer-right">
        <div style={{ color: '' }}>
          <div className="ft-up">
          <p>Need assistance?</p>
          <p>Our support team is available</p>
          </div>
          
          <div className='ft-down'>
            <p>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              (+91) 000 111 222 333
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
              <a href="mailto:support@cyberthreat" style={{ fontWeight: 'bold' }}>
                support@cyberthreat
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
