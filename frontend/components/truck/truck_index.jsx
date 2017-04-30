import React from 'react';
import TruckIndexItem from './truck_index_item';
import SearchFormContainer from '../search_form/search_form_container';

class TruckIndex extends React.Component{
  constructor(props){
    super(props);
    this.renderTrucks = this.renderTrucks.bind(this);
    this.renderFocus = this.renderFocus.bind(this);
  }

  componentDidMount(){
    this.truckIndexContainer.classList.add("fade-in");
  }

  componentDidUpdate(){
    if(this.props.focus){
      this.truckIndexContainer.classList.add("slide-left");
    } else {
      this.truckIndexContainer.classList.remove("slide-left");
    }
  }

  renderTrucks(){
    let trucks = Object.keys(this.props.trucks);
    return trucks.map((key) => {
      return <TruckIndexItem key={key} truck={this.props.trucks[key]} />
    });
  }

  renderFocus(){
    let focus;
    focus = this.props.focus ? <TruckIndexItem truck={this.props.focus} /> : <div></div>
    return <div id="truck-focus-item">
      <button id="truck-focus-back" onClick={ this.props.clearFocus }></button>
      <div id="truck-focus-truck">
        { focus }
      </div>
    </div>
  }

  render(){
    let trucks = this.renderTrucks();
    let truckFocus = this.renderFocus();
    return (
      <div id="truck-index-container-container">
        <SearchFormContainer />
        <div id="truck-index-container" className="to-fade-in-slower" ref={ truckIndexContainer => this.truckIndexContainer = truckIndexContainer }>
          <div id="truck-index">
            <div id="truck-index-header-container">
              <header id="truck-index-header">Nearby Food Trucks</header>
            </div>
            <ul>
              { trucks }
            </ul>
          </div>
          <div id="truck-focus">
            { truckFocus }
          </div>
        </div>
      </div>
    );
  }
}

export default TruckIndex;
