import Store from './store'

const store = Store();
let section= {name:"Airbus Dashboard",progress:"dashboard > airline"};

store.getStore$().subscribe((newSection) => {
  section = newSection
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setSectionName(newSection) {
    store.updateStore(newSection);
  },
  getSectionName() {
    return section
  }
}
