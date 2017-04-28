export default class MarkerManager{
  constructor(map, markerClick){
    this.map = map;
    this.markers = [];
    this.markerClick = markerClick;
    this.removeOldMarkers = this.removeOldMarkers.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.addNewMarkers = this.addNewMarkers.bind(this);
    this.createMarkerFromTruck = this.createMarkerFromTruck.bind(this);
  }

  updateMarkers(trucks){
    let truckIds = Object.keys(trucks).map((el) => (parseInt(el)));
    this.addNewMarkers(truckIds, trucks);
    this.removeOldMarkers(truckIds);
  }

  removeOldMarkers(truckIds){
    this.markers.forEach((marker) => {
      if(!truckIds.includes(marker.truckId)){
        this.removeMarker(marker);
      }
    })
  }

  removeMarker(marker){
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  addNewMarkers(truckIds, trucks){
    let currentTruckIds = this.markers.map((marker) => (marker.truckId))
    truckIds.forEach((truckId) => {
      if(!currentTruckIds.includes(truckId)){
        this.createMarkerFromTruck(trucks[truckId]);
      }
    })
  }

  createMarkerFromTruck(truck){
    const pos = new google.maps.LatLng(truck.lat, truck.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      truckId: truck.id
    });
    marker.addListener('click', () => this.markerClick(truck));
    this.markers.push(marker);
  }

}
