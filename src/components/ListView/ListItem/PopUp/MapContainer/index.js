import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  display: 'block',
  height: '11.25rem',
  maxWidth: '26rem',
  position: 'relative',
  width: '100%',
};

export class MapContainer extends Component {
  render() {
    const { lat, lng } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat,
          lng
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJxmtQ59nuuIDYEssXwbZkR331_bSA5rA'
})(MapContainer);
