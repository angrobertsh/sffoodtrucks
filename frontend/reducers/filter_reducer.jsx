import merge from 'lodash/merge';

const defaultState = {
  bounds: {},
  tags: []
};

const FilterReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "UPDATE_FILTER_STORE":
      newState = merge(defaultState, {[action.filter]: action.value});
      return newState;
    default:
      return newState;
  }
}


export default FilterReducer;
