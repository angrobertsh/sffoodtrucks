import merge from 'lodash/merge';

const defaultState = {
  bounds: {},
  tags: []
};

const FilterReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "UPDATE_BOUNDS":
      newState = merge(defaultState, {bounds: action.bounds});
      return newState;
    case "UPDATE_TAG":
      newState = merge(newState, {tags: action.tag});
      return newState;
    case "REMOVE_TAGS":
      newState = merge(newState, {tags: null}, {tags: []});
      return newState;
    default:
      return newState;
  }
}


export default FilterReducer;
