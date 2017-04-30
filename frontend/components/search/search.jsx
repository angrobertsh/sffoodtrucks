import TruckMapContainer from '../truck_map/truck_map_container';
import TruckIndexContainer from '../truck/truck_index_container';
import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="app-body">
        <TruckMapContainer />
        <TruckIndexContainer />
      </div>
    );
  }
}

export default Search;
