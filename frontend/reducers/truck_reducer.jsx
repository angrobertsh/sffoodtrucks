import merge from 'lodash/merge';

const defaultState = {
  trucks: {},
  errors: []
};

const TruckReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "RECEIVE_ALL_TRUCKS":
      newState = merge(defaultState, {bathrooms: action.bathrooms});
      return newState;
    case "RECEIVE_SINGLE_TRUCK":
      newState = merge(newState, {bathrooms: action.bathroom, errors: null}, {errors: []});
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
