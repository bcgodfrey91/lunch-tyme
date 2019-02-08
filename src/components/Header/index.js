import React, { Component } from 'react';
import mapIcon from './icon_map.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <p className="header-title">
          Lunch Tyme
        </p>
        <div
          className="header-map-icon-container"
        >
          <img
            className="header-map-icon"
            src={mapIcon}
            alt="Map Icon"
          />
        </div>
      </header>
    );
  }
}

export default Header;
