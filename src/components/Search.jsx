import React from 'react';
// import './SearchFilter.css';
import './Search.css';

const Search = () => {
  return (
      <div className="search_bar">
            <div className="search-filter-container">
      <div className="search-header">
        <h2>Search</h2>
        <button className="close-button">✖</button>
      </div>

      <form className="search-form">
        <div className="form-group">
          <label>Threat level</label>
          <div className="range-group">
            <div>
              <label>Min. severity</label>
              <input type="range" min="0" max="10" defaultValue="0" />
              <span>Low</span>
            </div>
            <div>
              <label>Max. severity</label>
              <input type="range" min="0" max="10" defaultValue="10" />
              <span>High</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Incident type</label>
          <div className="incident-type-group">
            <div className="incident-type-item">
              <i className="fas fa-database"></i> Data
            </div>
            <div className="incident-type-item">
              <i className="fas fa-fish"></i> Phishing attack
            </div>
            <div className="incident-type-item">
              <i className="fas fa-lock"></i> Ransomware
            </div>
          </div>
        </div>

        <div className="form-group-search">
          <label>Location of incident</label>
          <div className="location-group">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <div>
              <input type="checkbox" /> Financial
            </div>
            <div>
              <input type="checkbox" /> Data
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>System shutdown</label>
          <div className="shutdown-group">
            <div>
              <input type="checkbox" /> Anonymous
            </div>
            <div>
              <input type="checkbox" /> Malware
            </div>
            <div>
              <input type="checkbox" /> Network
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="reset" className="reset-button">Reset</button>
          <button type="submit" className="filter-button">Filter results</button>
        </div>
      </form>
    </div>
      </div>
  );
};

export default Search;
