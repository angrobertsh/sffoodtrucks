import React from 'react';
import Topbar from './topbar/topbar';
import Search from './search/search';
import Splash from './splash/splash';

const App = ({children}) => (
  <div id="page">
    <Splash />
    <div id="app">
      <Topbar />
      <Search />
      {children}
    </div>
  </div>
);

export default App;
