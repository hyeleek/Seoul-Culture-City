import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from "prop-types";
import "./index.css";

const key = process.env.REACT_APP_API_KEY;

class LocationMap extends Component {

  render() {
    const { latitude, longtitude } = this.props;
    return (
        <Map
          className="google"
          google={this.props.google}
          style={{backgroundColor: "lightblue"}}
          zoom={16}
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
  apiKey: key,
  language: "en",
})(LocationMap);
