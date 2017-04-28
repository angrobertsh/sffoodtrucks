import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ACTIONS from './actions/truck_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  let store = configureStore();
  window.store = store;
  window.seed = ACTIONS.getSeedData;
  //
  // store.dispatch(ACTIONS.fetchTrucks());

  ReactDOM.render(<Root store={ store }/>, root);
});
