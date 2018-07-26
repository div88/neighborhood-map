import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: require("./locations.json"), // Get the locations from the JSON file
      
    };
  }

    componentDidMount() {
    
    }
  render() {
    return (
      <div className="App">
        <Map locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;

