## The SF Food Truck App


### How to run


### Implementation details

React components were made to hold the 2 main display elements, the address form, and the realtor index. These two components depend on the store, accessed through their containers, provided by the provider function in the root, to keep track of when to query the google API, and when to update the store with new address information. An example of the address form container, which dispatches the actions for the API query and to update the address state is as follows:

```javascript
const mapStateToProps = (state, ownProps) => ({
  address1: state.realtors.address1,
  address2: state.realtors.address2
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRealtors: (address) => dispatch(REALTOR_ACTIONS.fetchRealtors(address)),
  updateAddresses: (addresses) => dispatch(REALTOR_ACTIONS.updateAddresses(addresses)),
  updateAddress1: (address1) => dispatch(REALTOR_ACTIONS.updateAddress1(address1)),
  updateAddress2: (address2) => dispatch(REALTOR_ACTIONS.updateAddress2(address2))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm);

```

The google maps API calls were used in the middleware that caught the querying actions. The specific API calls are as follows:

```javascript
export const getCoordsFromLocation = (location, success) => {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({address: location}, (results, status) => {
    if(status == google.maps.GeocoderStatus.OK){
      // this is a latlng object - for numbers do .lat() and .lng() on it
      success(results[0].geometry.location);
    } else {
      alert("Invalid location, please try a different location");
    }
  });
}

export const getRealtorsNearLocation = (location, success) => {
  const request = {
    location: location,
    radius: 16100,
    query: "real estate agency"
  }
  let service = new google.maps.places.PlacesService(document.createElement('div'));
  service.textSearch(request, (results, status) => {
    if(status == google.maps.places.PlacesServiceStatus.OK){
      success(postProcess(results));
    } else {
      alert("No realtors in this area")
    }
  });
}
```

Querying and sorting occur for various events. The main interaction, the onSubmit function of the address form, only updates the store with the new address information. This information then cascades down to the components themselves, and when the address form receives new props in the form of the new addresses from the store, it begins the calls to the Google APIs. When the realtor index gets new address props, and new real estate agent information, it performs the sort each time and rerenders its data.

### Possible Improvements

A stronger implementation of this project would involve local caching to hold old queries and sorts so the Google API wouldn't be queried so often. Caching could also save on space if old sorts were retained as well. Even on this small scale, these 20 entries take a moment to sort themselves and rerender.
