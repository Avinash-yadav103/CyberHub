import React from 'react';
import './report.css';

const ReportIncident = () => {
  return (
    <div className="hellocontainer">
      <header>
        <div className="logo">CII Threat Monitor</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Threat Dashboard</a>
          <a href="#">Report Incident</a>
        </nav>
      </header>

      <main>
        <h1>Report Cyber Incident</h1>
        <form>
          <div className="form-group">
            <label htmlFor="incident-details">Incident Details</label>
            <textarea id="incident-details" placeholder="Describe the incident..."></textarea>
          </div>

          <div className="form-group">
            <label>Severity Level</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="severity" value="low" /> Low
              </label>
              <label>
                <input type="radio" name="severity" value="medium" /> Medium
              </label>
              <label>
                <input type="radio" name="severity" value="high" /> High
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="attachments">Attachments</label>
            <input type="file" id="attachments" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>

      <footer>&copy; 2023 CII Threat Monitor. All rights reserved.</footer>
    </div>
  );
};

export default ReportIncident;
