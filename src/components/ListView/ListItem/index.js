import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    const { name, category, backgroundImageURL } = this.props;
    return (
      <div className="list-item">
        <img
          className="list-item-background-image"
          src={backgroundImageURL}
          alt="List Item Background"
        />
        <div className="list-item-contents">
          <p className="list-item-name">{name}</p>
          <p className="list-item-category">{category}</p>
        </div>
      </div>
    );
  }
}

export default ListItem;
