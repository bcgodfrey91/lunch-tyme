import React, { Component, Fragment } from 'react';
import './PopUp.css';

class ListItem extends Component {
  render() {
    const {
      isShown,
      name,
      category,
      contact,
      location: { lat, lng, address, city, state, postalCode},
    } = this.props;

    const formattedPhone = () => {
      if (contact.formattedPhone) {
        return (
          <Fragment>
            <p className="pop-up-item-phone">{contact.formattedPhone}</p>
          </Fragment>
        );
      }
      return;
    }

    const twitter = () => {
      if (contact.twitter) {
        return (
          <Fragment>
            <p className="pop-up-item-phone">{contact.twitter}</p>
          </Fragment>
        );
      }
      return;
    };

    return (
      <div className={`pop-up ${isShown}`}>
        <div className="pop-up-map">
          {lat}, {lng}
        </div>
        <div className="pop-up-divider">
          <p className="pop-up-item-name">{name}</p>
          <p className="pop-up-item-category">{category}</p>
        </div>
        <div className="pop-up-contents">
          <div className="pop-up-address-container">
            <div className="pop-up-address">{address}</div>
            <div className="city-state-container">
              {city}, {state} {postalCode}
            </div>
          </div>
          {formattedPhone()}
          {twitter()}
        </div>
      </div>
    );
  }
}

export default ListItem;
