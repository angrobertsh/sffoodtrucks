import React from 'react';
import { Link, withRouter } from 'react-router';

class TruckMap extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(TruckMap);
