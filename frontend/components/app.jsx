import React from 'react';
import Topbar from './topbar/topbar';
import SearchContainer from './search/search_container';

const App = ({children}) => (
  <div id="app">
    <Topbar />
    <SearchContainer />
    {children}
  </div>
);

export default App;
