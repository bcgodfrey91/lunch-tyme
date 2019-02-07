import React, { Component } from 'react';
import PopUp from './PopUp';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: '',
    };
  }

  showDetails = (e) => {
    const body = document.querySelector('body');
    this.state.isShown === '' ? this.setState({ isShown: 'shown' }) : this.setState({ isShown: '' });
  }

  render() {
    const {
      name,
      category,
      backgroundImageURL,
      contact,
      location,
    } = this.props.restaurant;
    const { isShown } = this.state;
    return (
      <div className="list-item" onClick={this.showDetails}>
        <img
          className="list-item-background-image"
          src={backgroundImageURL}
          alt="List Item Background"
        />
        <div className="list-item-contents">
          <p className="list-item-name">{name}</p>
          <p className="list-item-category">{category}</p>
        </div>
        <PopUp
          isShown={isShown}
          name={name}
          category={category}
          contact={contact}
          location={location}
        />
      </div>
    );
  }
}

export default ListItem;
