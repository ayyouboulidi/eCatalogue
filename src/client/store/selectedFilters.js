import Store from './store'

const store = Store();
let filters=[];

store.getStore$().subscribe((newFilters) => {
  filters = newFilters
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setFilters(newFilters) {
    store.updateStore(newFilters);
  },
  getFilters() {
    return filters
  }
}
