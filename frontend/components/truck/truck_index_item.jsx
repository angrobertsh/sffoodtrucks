import React from 'react';

const TruckIndexItem = ({truck}) => {
  return (
    <div className="truck">
      <div className="truck-top">
        <div className="truck-name-address">
          <div className="truck-name"> { truck.name } </div>
          <div className="truck-address"> { truck.address }</div>
        </div>
        <div className="truck-dayshours"> { truck.dayshours }</div>
      </div>
      <div className="truck-food"> { truck.food } </div>
    </div>
  )
}

export default TruckIndexItem;
