import React, { Component } from 'react';
import PopUp from './PopUp';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  showDetails = () => {
    !this.state.isShown ? this.setState({ isShown: true }) : this.setState({ isShown: false });
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
      <div className="list-item">
        <div className={`list-item-contents ${isShown ? 'shown' : ''}`} onClick={this.showDetails}>
          <img
            className="list-item-background-image"
            src={backgroundImageURL}
            alt="List Item Background"
          />
          <div className="list-item-details">
            <p className="list-item-name">{name}</p>
            <p className="list-item-category">{category}</p>
          </div>
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
