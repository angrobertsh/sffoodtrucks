## I'm Robert Ang, and welcome to Truck Please! Bay Area

Finding food carts in your area can be difficult! Seeing where you are, and where trucks are in relation to you is important to your daily lunching, or your midnight capers. Truck Please! Bay Area, helps solve that problem by mapping out food trucks in San Francisco so you can visually see where trucks are near specific locations.

### How to run

Go to the [live link!](https://sffoodtruckskqed.herokuapp.com).

### Implementation details

This solution implements essential UX on the frontend, and creates room for extendability on the backend to read and parse the database found at [DataSF](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat).

Modularized React components were fed information from a redux store to rapidly rerender relevant information. The re-querying of the PostgreSQL Rails database by the redux flux pattern kept the component updates neat and clean.

#### Seeding the database

The database is seeded from a one-time dispatched action that makes an ajax call to DataSF's Food Truck database, taking the JSON-ified data and passing it as a large batch to the Rails backend.

```javascript
export const seedTrucks = (trucks) => (
  $.ajax({
    url: `api/trucks/seed`,
    method: "POST",
    data: {trucks: trucks}
  })
)

export const getTruckData = () => (
  $.ajax({
    url: 'https://data.sfgov.org/resource/6a9r-agq8.json',
    method: "GET"
  })
)
```

The batch then makes many entries through strong params to create a better-suited database for out purposes. It returns an array of trues and falses based on which entries succeded and which did not and their reasons for failing.

```ruby
  def seed
    @trucks = seed_params.values.map{|truck|
      preprocess_params(truck)
    }
    @trucks_array = @trucks.map {|truck|
      @truck = Truck.new(truck)
      if @truck.save
        true
      else
        @truck.errors.full_messages
      end
    }

    respond_to do |format|
      format.json { render :json => @trucks_array }
    end
  end

  def seed_params
    keys = params[:trucks].keys
    properties = [:address, :applicant, :dayshours, :fooditems, :latitude, :longitude, :locationdescription, :status]
    all_permitted = keys.map{|key| {key => properties}}
    params.require(:trucks).permit(*all_permitted)
  end

```

The data is then ready to be queried and used by our frontend!

#### Display Components

The three main display components include a `TruckMapContainer`, which holds the google map, a `SearchFormContainer` which allows food input, and a set of `TruckIndexItem`s, in either as an index or showing a single truck's information. Depending on click activity, either the show or index is toggled. CSS3 transitions were used to add small fade and translate effects over time. An interactive element on the `SearchForm` I liked involved changing the button display based on the state shape.

```jsx
  <button className="submit-button">{ this.state.food ? "This!" : "Anything!" }</button>
```

#### Display Logic/Flux Pattern

On the frontend, points are plotted on a google maps map. These points are updated dynamically whenever the map idles through a set of Promises, causing the redux store to update its filters, and having that updated store dispatch an asynchronous call to the database to get trucks matching those filters.

```javascript
google.maps.event.addListener(this.map, 'idle', () => {
  const { north, south, east, west } = this.map.getBounds().toJSON();
  const bounds = {
    northEast: { lat: north, lng: east },
    southWest: { lat: south, lng: west } };
  this.props.updateFilter("bounds", bounds)
});
```

As seen above, the map `bounds` are acquired through getting bounds information from the google map. These boundaries are passed to the `updateFilter` action that both synchronously updates the store, and asynchronously queries the database for information directly after.

```javascript
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilterStore(filter, value));
  return TRUCK_ACTIONS.fetchTrucks(getState().filters)(dispatch);
};

export const updateFilterStore = (filter, value) => ({
  type: "UPDATE_FILTER_STORE",
  filter,
  value
});
```

These filters are all passed together to the backend Rails database, which chains them in `where` statements. An additional filter can be set based on the food you'd like to eat, elaborated by the following database query.

```ruby
def self.with_food(food)
  self.where("food ILIKE ?", "%" + food + "%")
end
```

If more time were spent scrubbing the data, it would also be possible to query based on days of the week and time of day. However, owing to the lack of structure in some of the daytime strings from the original data, a custom parse method on the data before it was put in the database was not possible. The scaffolding for days and hours data is present in the search form as well as on the seeding function on the backend, but owing to the challenges of the seed data they weren't fully implemented.

Once the state is updated, a marker manager renders google maps markers corresponding to the `truck`s in the redux store. This is achieved by removing old trucks no longer in the store but still on the map, and adding new trucks.

```javascript
updateMarkers(trucks){
  let truckIds = Object.keys(trucks).map((el) => (parseInt(el)));
  this.addNewMarkers(truckIds, trucks);
  this.removeOldMarkers(truckIds);
}
```

### Robert's Other Stuff

Check out [9brag!](https://github.com/angrobertsh/9brag) Or draw pretty pictures with [Colortale!](https://github.com/angrobertsh/colortale). You can also see Robert's public profile [here](https://angrobertsh.github.io/webdesign)
