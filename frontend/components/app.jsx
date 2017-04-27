import React from 'react';
import Topbar from './topbar/topbar';

const App = ({children}) => (
  <div className="App">
    <Topbar />
    {children}
  </div>
);

export default App;
