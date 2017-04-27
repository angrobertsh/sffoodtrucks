import TruckMapContainer from './truck_map';
import TruckIndexContainer from './truck_index';
import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <TruckMapContainer />
        <TruckIndexContainer />
      </div>
    );
  }
}

export default Search;
