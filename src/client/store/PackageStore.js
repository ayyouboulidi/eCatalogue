import Store from './store';

const store = Store();
let packageFilter = false

store.getStore$().subscribe((newPackageFilter) => {
    packageFilter = newPackageFilter;
});

export default {
  getStore$() {
    return store.getStore$();
  },
  setPackageFilter(newPackageFilter) {
      store.updateStore(newPackageFilter);
  },
  getPackageFilter() {
      return packageFilter;
  }
}
