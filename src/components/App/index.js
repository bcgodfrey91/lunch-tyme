import React, { Component } from 'react';
import Header from '../Header';
import ListView from '../ListView';
import Footer from '../Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      restaurants: [],
    };
  }

  componentDidMount() {
    this.fetchRestaurants()
      .then(res => this.setState({ restaurants: res.restaurants, isLoading: false }))
      .catch(err => console.log(err));
  }

  fetchRestaurants = async () => {
    const response = await fetch("https://s3.amazonaws.com/br-codingexams/restaurants.json");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    const { restaurants, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="app">
          <Header />
          <div className="loader-container">
            <div className="loader"> loading </div>
          </div>
          <Footer />
        </div>
      )
    }

    return (
      <div className="app">
        <Header />
        <ListView
          restaurants={restaurants}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
