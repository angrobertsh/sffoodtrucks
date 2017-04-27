import React from 'react';
import TruckIndexItem from './truck_index_item';

class TruckIndex extends React.Component{
  constructor(props){
    super(props);
    this.renderTrucks = this.renderTrucks.bind(this);
  }

  componentDidMount(){
    document.getElementById("truck-index").className += " fade-in";
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
      <div id="truck-index" className="to-fade-in-slower">
        <header id="truck-index-header">Nearby Food Trucks</header>
        { trucks }
      </div>
    );
  }
}

export default TruckIndex;
