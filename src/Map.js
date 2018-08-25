import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {
    state = {
      isOpen: false,
      infoId: '',
      allLocations: this.props.locations,
      locations: this.props.locations
    }
  
    handleToggleOpen = (item) => {
      this.setState({
        isOpen: true,
        infoId: item.title,
        position: {
          lat: item.lat,
          lng: item.lng
        }
      });
    }

    handleToggleClose = (id) => {
      this.setState({
        isOpen: false,
        infoId: id,
      
      });
    }

  updateQuery = (query) => {
    var newLocations;
    if(query.length > 0){
      
      newLocations = this.state.locations.filter((location) => {return location.title.toLowerCase().includes(query.toLowerCase())})
      this.setState({
        locations: newLocations
      })
    } else {
      this.setState({
        locations: this.state.allLocations
      })
    }
    
  }

  // Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
  
  render() {
   let locations = this.state.locations
    const MyMapComponent = withGoogleMap(props => (
      <GoogleMap
          defaultCenter = {{ lat: 37.77493, lng: -122.419416 }}
          defaultZoom = { 12 }>
          
          this.marker = {locations.map(marker => (
            <Marker
              key={marker.title}
              position={{ lat: marker.lat, lng: marker.lng }}
              
            onClick={() => this.handleToggleOpen(marker)}>
            {(this.state.position && this.state.infoId === marker.title) &&
              <InfoWindow  position={this.state.position}>
                <span>{marker.title}</span>
              </InfoWindow>
              }
            </Marker>
        ))}
      </GoogleMap>
    ));
    return(
      <div>
        <div className="search">
          <div className="search-books-results" style={{  }}>
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
              <ul>
                {locations.map((location) => (
                  <li style={{ listStyle: `none` }} key={location.title} className="location" onClick={() => this.handleToggleOpen(location)}>
                  {(this.state.position && this.state.infoId.title === location.title) &&
                    <p>{location.title}</p>
                  }
                  {location.title}
                </li>
                ))}             
              </ul>

              {this.state.isError && (
                  <p className="error-label">No results available for this search. Try a different search term.</p>
              )}
          </div>
        </div>
        <MyMapComponent 
          containerElement={ <div style={{ height: `100vh`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />             
        <div id="map"></div>
      </div>
    );
   }
};
export default Map;
