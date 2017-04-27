import React from 'react';
import { Link, withRouter } from 'react-router';

class TruckMap extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 14
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions)
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(TruckMap);
