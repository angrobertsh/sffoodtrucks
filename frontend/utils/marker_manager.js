export default class MarkerManager{
  constructor(map, markerClick){
    this.map = map;
    this.markers = [];
    this.markerClick = markerClick;
    this.removeOldMarkers = this.removeOldMarkers.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.addNewMarkers = this.addNewMarkers.bind(this);
    this.createMarkerFromTruck = this.createMarkerFromTruck.bind(this);
    this.stopAllBounces = this.stopAllBounces.bind(this);
  }

  updateMarkers(trucks, focus){
    let truckIds = Object.keys(trucks).map((el) => (parseInt(el)));
    if(!focus){
      this.stopAllBounces();
    }
    this.addNewMarkers(truckIds, trucks);
    this.removeOldMarkers(truckIds);
  }

  removeOldMarkers(truckIds){
    this.markers.filter( (marker) => !truckIds.includes(marker.truckId)).forEach((marker) => (this.removeMarker(marker)));
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
    marker.setAnimation(null);
    marker.addListener('click', () => this.bounceAndClick(truck));
    this.markers.push(marker);
  }

  bounceAndClick(truck){
    this.markerClick(truck);
    let marker = this.markers.find((marker) => truck.id === marker.truckId )
    if (marker.getAnimation() !== null) {
      this.stopAllBounces();
    } else {
      this.stopAllBounces();
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  stopAllBounces(){
    this.markers.forEach((marker) => marker.setAnimation(null))
  }

}
