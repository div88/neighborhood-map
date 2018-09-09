import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as locationFourSquareAPI from './LocationInfoAPI.js'

class Map extends Component {
    
    state = {
      isOpen: false,
      infoId: '',
      allLocations: this.props.locations,
      locations: this.props.locations,
      locationInfo: 'Loading ...',
      photo: 'Loading ...',
      name: 'Loading ...',
      categories: 'Loading ...',
      url:'Loading ...',
      tips:'Loading ...'
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
      //this.marker.animation = window.google.maps.Animation.DROP;
      this.getFoursquareData(item);
    }



    getFoursquareData = (venueItem) => {
     return locationFourSquareAPI.getlocationInfo(venueItem).then(response => {
       if(response === 'error' || response.meta.code !== 200)
         this.setState({
           likes: 'Error loading content',
           photo: 'error'
         });
       else{
         if(response.response.venue)
          this.setState({
            photo: response.response.venue.bestPhoto.prefix+'200x200'+response.response.venue.bestPhoto.suffix,
            name: response.response.venue.name,
            categories: response.response.venue.categories[0].name,
            url:response.response.venue.url,
            tips:response.response.venue.tips.groups[0].items[0].text
          });
         else
            this.setState({
            photo:'error',
            name: 'error',
            categories: 'error',
            url:'error',
            tips:'error'
          });
           
       }
     })
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
              animation= {window.google.maps.Animation.DROP}
              // {this.state.activeMarker.title === markerInfo.title ? this.props.google.maps.Animation.BOUNCE : null  }
              
            onClick={() => this.handleToggleOpen(marker)}>
            {(this.state.position && this.state.infoId === marker.title) &&
              
              <InfoWindow className="infoWindow" position={this.state.position}>
                <div>
                  <img  tabIndex="0"   src={this.state.photo}   alt={marker.title}/>
                  <p className="locationTitle"><strong>Name: </strong>{this.state.name}</p>
                  <p><strong>Categories: </strong>{this.state.categories}</p>
                  <p><strong>URL: </strong>{this.state.url}</p>
                  {/* <p>{this.state.tips}</p> */}
                </div>
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
          <input type="text" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
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
