// make this code
import React from 'react';
import './stats.css'; // Include your custom CSS here

const Stat = () => {
  return (
    <div className="app">
      {/* <header className="header">
        <SearchBar />
        <div className="user-section">
          <span>Kim Lee</span>
          <img
            src="https://imgs.search.brave.com/Tr3zJsr7qC4tF_DSyJ6R1cMrxYd4sliU06i6c64oDWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk5/MDUzNDEyL3Bob3Rv/L2luZG9vci1pbWFn/ZS1vZi1iZWF1dGlm/dWwtaGFwcHktYXNp/YW4tZ2lybC1sb29r/aW5nLWF0LWNhbWVy/YS53ZWJwP2I9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz1TQU95/a1VLNHYtLTJUVHNH/NHg5cE9iNERYY2N1/UmdadXgtSGN4blNU/RlFNPQ"
            alt="User Icon"
          />
        </div>
      </header> */}
      <IncidentOverview />
      <ThreatLandscape />
      <div className="analysts-section">
        <AnalystCard name="Incident Analyst" role="Security Specialist" />
        <AnalystCard
          name="Incident Investigator"
          role="Forensic Analyst"
          feedback="No feedback"
        />
        <AnalystCard name="Kim Lee" role="Cybersecurity Analyst" />
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
  );
};

const IncidentOverview = () => {
  return (
    <div className="incident-overview">
      <h1>Incident Overview</h1>
      <p>Stay informed with the latest cyber incidents.</p>
    </div>
  );
};

const ThreatLandscape = () => {
  return (
    <div className="threat-landscape">
      <h2>Threat Landscape</h2>
      <div className="threat-bars">
        <div className="bar">
          <span>DOS</span>
          <div className="bar-fill" style={{width: '50%' }}></div>
        </div>
        <div className="bar">
          <span>DDOS</span>
          <div className="bar-fill" style={{ width: '35%' }}></div>
        </div>
        <div className="bar">
          <span>Data</span>
          <div className="bar-fill" style={{ width: '80%' }}></div>
        </div>
        <div className="bar">
          <span>Phish</span>
          <div className="bar-fill" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

const AnalystCard = ({ name, role, feedback }) => {
  return (
    <div className="analyst-card">
      <div className="analyst-header">
        <img
          src="https://imgs.search.brave.com/Tr3zJsr7qC4tF_DSyJ6R1cMrxYd4sliU06i6c64oDWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk5/MDUzNDEyL3Bob3Rv/L2luZG9vci1pbWFn/ZS1vZi1iZWF1dGlm/dWwtaGFwcHktYXNp/YW4tZ2lybC1sb29r/aW5nLWF0LWNhbWVy/YS53ZWJwP2I9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz1TQU95/a1VLNHYtLTJUVHNH/NHg5cE9iNERYY2N1/UmdadXgtSGN4blNU/RlFNPQ"
          alt={name}
        />
        <div className="analyst-info">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className="analyst-metrics">
        <Metric name="Alertness & vigilance" />
        <Metric name="Incident severity" />
        <Metric name="Incident response" />
        <Metric name="Incident investigations" />
      </div>
      {feedback && <div className="analyst-feedback">Feedback: {feedback}</div>}
    </div>
  );
};

const Metric = ({ name }) => {
  return (
    <div className="metric">
      <span>{name}</span>
      <div className="metric-values">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
        <span>Critical</span>
        <span>Info</span>
        <div className="score-buttons">
          {Array(5).fill(0).map((_, i) => (
            <button key={i}>{i + 1}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;