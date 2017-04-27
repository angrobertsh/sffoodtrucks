import React from 'react';
import { Link, withRouter } from 'react-router';
import MarkerManager from '../../utils/marker_manager';

class TruckMap extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 14
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers();
    document.getElementById("map-container").className += " fade-in";
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers();
  }

  render(){
    return (
      <div id='map-container' className='to-fade-in' ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(TruckMap);
