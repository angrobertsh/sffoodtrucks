import { combineReducers } from 'redux';
import TruckReducer from './truck_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  trucks: TruckReducer,
  filters: FilterReducer
});

export default RootReducer;
