import React from 'react';
import TruckIndexItem from './truck_index_item';

class TruckIndex extends React.Component{
  constructor(props){
    super(props);
    this.renderTrucks = this.renderTrucks.bind(this);
  }

  renderTrucks(){
    let trucks = Object.keys(this.props.trucks);
    return trucks.map((key) => {
      return <TruckIndexItem key={key} truck={this.props.trucks[key]} />
    });
  }

  render(){
    let trucks = this.renderTrucks();
    return (
      <div id="truck-index">
        <header id="truck-index-header">Nearby Food Trucks</header>
        { trucks }
      </div>
    );
  }
}

export default TruckIndex;
