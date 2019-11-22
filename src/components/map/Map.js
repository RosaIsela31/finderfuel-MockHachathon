import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './CurrentLocation';

//import * as dataGas from './data/gasstations.json';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
       
      >
        {dataGas.map((gasStore)=>(
          <Marker onClick={this.onMarkerClick} name={'current location'} key={gasStore.properties.place_id} 
          position={{
            lat:gasStore.location.y,
            lng:gasStore.location.x}} />
        ))}
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAebXFF8h-t7eN5aft9vC0qpndBTKr5tfY'
})(MapContainer);