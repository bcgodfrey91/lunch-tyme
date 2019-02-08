import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  display: 'block',
  height: '11.25rem',
  maxWidth: '26rem',
  position: 'relative',
  width: '100%',
};

export class MapContainer extends Component {
  render() {
    const { lat, lng, restaurantName } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat,
          lng
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
          icon={{
            height: "1rem",
            name: { restaurantName },
            title: { restaurantName },
            url: "https://i.imgur.com/UFUz1Rj.png",
            width: "1rem"
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJxmtQ59nuuIDYEssXwbZkR331_bSA5rA'
})(MapContainer);
