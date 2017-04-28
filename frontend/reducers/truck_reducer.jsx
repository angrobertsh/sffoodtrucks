import merge from 'lodash/merge';

const defaultState = {
  trucks: {},
  errors: [],
  focus: null
};

const TruckReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "RECEIVE_ALL_TRUCKS":
      newState = merge({}, defaultState, {trucks: action.trucks});
      return newState;
    case "RECEIVE_SINGLE_TRUCK":
      newState = merge(newState, {trucks: action.trucks, errors: null}, {errors: []});
      return newState;
    case "SET_FOCUS":
      newState = merge(newState, {focus: action.truck});
      return newState;
    case "CLEAR_FOCUS":
      newState = merge(newState, {focus: null});
      return newState;
    case "RECEIVE_TRUCK_ERRORS":
      newState = merge(newState, {errors: action.errors});
      return newState;
    case "CLEAR_TRUCK_ERRORS":
      newState = merge(newState, {errors: null}, {errors: []});
      return newState;
    default:
      return newState;
  }
}


export default TruckReducer;
