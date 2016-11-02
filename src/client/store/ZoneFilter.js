import Store from './store';

const store = Store();
let zoneAircraft = false

store.getStore$().subscribe((newZoneAircraft) => {
    zoneAircraft = newZoneAircraft;
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setAircraftZone(newZoneAircraft) {
    store.updateStore(newZoneAircraft);
  },
  getAircraftZone() {
    return zoneAircraft;
  }
}
