import React, { Component } from 'react';
import lunch from './lunch.png';
import internets from './internets.png';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <button className="footer-link">
          <img src={lunch} alt="Lunch Icon" className="footer-link-image" />
          <p>Lunch</p>
        </button>
        <button className="footer-link">
          <img src={internets} alt="Internets Icon" className="footer-link-image" />
          <p>Internets</p>
        </button>
      </footer>
    );
  }
}

export default Footer;
