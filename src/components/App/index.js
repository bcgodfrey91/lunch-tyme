import React, { Component } from 'react';
import Header from '../Header';
import ListView from '../ListView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ListView />
      </div>
    );
  }
}

export default App;
