import React from 'react';
import Topbar from './topbar/topbar';
import TruckMapContainer from './truck_map/truck_map_container';
import TruckIndexContainer from './truck/truck_index_container';
import Search from './search/search';

const App = ({children}) => (
  <div id="app">
    <Topbar />
    <div id="app-body">
      <TruckMapContainer />
      <TruckIndexContainer />
    </div>
    {children}
  </div>
);

export default App;
