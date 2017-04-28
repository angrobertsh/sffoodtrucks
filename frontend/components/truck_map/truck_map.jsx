import React from 'react';
import { Link, withRouter } from 'react-router';
import MarkerManager from '../../utils/marker_manager';

class TruckMap extends React.Component{

  constructor(props){
    super(props);
    this.addBoundsListener = this.addBoundsListener.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 14
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.trucks);
    this.mapNode.classList.add("fade-in");
    this.addBoundsListener();
  }

  addBoundsListener(){
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter("bounds", bounds)
    });
  }


  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.trucks);
  }

  render(){
    return (
      <div id='map-container' className='to-fade-in' ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(TruckMap);
