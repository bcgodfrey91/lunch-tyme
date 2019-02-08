import React, { Component, Fragment } from 'react';
import MapContainer from './MapContainer';
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
      if (contact && contact.formattedPhone) {
        return (
          <Fragment>
            <p className="pop-up-item-phone">{contact.formattedPhone}</p>
          </Fragment>
        );
      }
      return;
    }

    const twitter = () => {
      if (contact && contact.twitter) {
        return (
          <Fragment>
            <p className="pop-up-item-social">@{contact.twitter}</p>
          </Fragment>
        );
      }
      return;
    };

    return (
      <div className={`pop-up ${isShown ? 'shown' : ''}`}>
        <div className="pop-up-map">
          <MapContainer
            lat={lat}
            lng={lng}
            restaurantName={name}
          />
        </div>
        <div className="pop-up-divider">
          <p className="pop-up-item-name">{name}</p>
          <p className="pop-up-item-category">{category}</p>
        </div>
        <div className="pop-up-contents">
          <div className="pop-up-address-container">
            <p className="pop-up-address">{address}</p>
            <p className="city-state-container">
              {city}, {state} {postalCode}
            </p>
          </div>
          {formattedPhone()}
          {twitter()}
        </div>
      </div>
    );
  }
}

export default ListItem;
