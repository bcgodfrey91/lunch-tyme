import React, { Component } from 'react';
import Header from '../Header';
import ListView from '../ListView';
import Footer from '../Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ListView />
        <Footer />
      </div>
    );
  }
}

export default App;
