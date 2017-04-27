import React from 'react';

const TruckIndexItem = () => {
  return (
    <div className="truck">
      <div className="truck-name"> { this.props.truck.name } </div>
      <div className="truck-address"> { this.props.truck.address }</div>
      <div className="truck-dayshours"> { this.props.truck.dayshours }</div>
      <div className="truck-food"> { this.props.truck.food } </div>
    </div>
  )
}

export default TruckIndexItem;
