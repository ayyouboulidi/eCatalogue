import Store from './store'

const store = Store();
let item = {id:null,display:false};

store.getStore$().subscribe((newItem) => {
  item = newItem
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setItem(newItem) {
    store.updateStore(newItem);
  },
  resetItem(){
    let resetValue = {id:null,display:false}
    store.updateStore(resetValue);
  },
  getItem() {
    return item
  }
}
