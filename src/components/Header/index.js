import React, { Component } from 'react';
import mapIcon from './icon_map.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title">
          Lunch Tyme
        </h1>
        <a
          className="header-map-icon-link"
        >
          <img
            className="header-map-icon"
            src={mapIcon}
            alt="Map Icon"
          />
        </a>
      </div>
    );
  }
}

export default Header;
