import Store from './store'

const store = Store();
let view="Catalog";

store.getStore$().subscribe((newView) => {
  view = newView
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setView(newView) {
    store.updateStore(newView);
  },
  getView() {
    return view
  }
}
