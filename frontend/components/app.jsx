import React from 'react';
import Greeting from './greeting/greeting';

const App = ({children}) => (
  <div className="App">
    <Greeting />
    {children}
  </div>
);

export default App;
