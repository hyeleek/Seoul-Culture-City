import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from "prop-types";

import "./index.css";

const mapStyles = {
  width: '80%',
  height : "50%"
};

class LocationMap extends Component {

  render() {
    const { latitude, longtitude } = this.props;
    return (
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{lat : latitude, lng: longtitude}}
        >
          <Marker position={{ lat: latitude, lng: longtitude}} />
        </Map>
    );
  }

};

LocationMap.propTypes = {
  latitude : PropTypes.number.isRequired,
  longtitude : PropTypes.number.isRequired
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCd8Zd9vixarIFb244B6sZQJuOcJYYwqyU',
  language: "en",
})(LocationMap);
