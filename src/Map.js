import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {
  
  
    state = {
      isOpen: false,
      infoId: ''
    }
  
    handleToggleOpen = (id) => {
      this.setState({
        isOpen: true,
        infoId: id
      });
    }
  handleToggleClose = (id) => {
    this.setState({
      isOpen: false,
      infoId: id
    });
  }
  
  render() {
    var locations = this.props.locations;
   
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{ lat: 37.77493, lng: -122.419416 }}
        defaultZoom = { 8 }>
        
        {locations.map(marker => (
          <Marker
            key={marker.title}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => this.handleToggleOpen(marker.title)}>
            {(this.state.isOpen && this.state.infoId === marker.title)&&
              <InfoWindow onCloseClick={() => this.handleToggleClose(marker.title)}>
                <span>{marker.title}</span>
              </InfoWindow>
            }
          </Marker>
      ))}
      
    />
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />

        <div id="map"></div>
      </div>
   );
   }
};
export default Map;
