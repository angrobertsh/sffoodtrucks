import * as TRUCK_UTILS from '../utils/truck_api_utils';

export const getSeedData = () => dispatch => (
  TRUCK_UTILS.getTruckData()
    .then(trucks => dispatch(sendAPITrucks(trucks)))
);

export const sendAPITrucks = (trucks) => dispatch => (
  TRUCK_UTILS.seedTrucks(trucks)
    .then(error_array => dispatch(receiveTruckErrors(error_array)))
);

export const createTruck = truck => dispatch => (
  TRUCK_UTILS.postTruck(truck)
    .then(truck => dispatch(receiveSingleTruck(truck)),
      errors => dispatch(receiveTruckErrors(errors.responseJSON.errors)))
);

export const fetchTrucks = filters => dispatch => (
  TRUCK_UTILS.getTrucksInBounds(filters)
    .then(trucks => dispatch(receiveAllTrucks(trucks)))
);

export const receiveSingleTruck = (truck) => ({
  type: "RECEIVE_SINGLE_TRUCK",
  truck
});

export const receiveAllTrucks = (trucks) => ({
  type: "RECEIVE_ALL_TRUCKS",
  trucks
});

export const receiveTruckErrors = (errors) => ({
  type: "RECEIVE_TRUCK_ERRORS",
  errors
});

export const clearTruckErrors = () => ({
  type: "CLEAR_TRUCK_ERRORS"
});
