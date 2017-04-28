import React from 'react';

const TruckIndexItem = ({truck}) => {
  return (
    <div className="truck">
      <div className="truck-name"> { truck.name } </div>
      <div className="truck-address"> { truck.address }</div>
      <div className="truck-dayshours"> { truck.dayshours }</div>
      <div className="truck-food"> { truck.food } </div>
    </div>
  )
}

export default TruckIndexItem;
