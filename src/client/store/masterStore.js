import Store from './store'

const store = Store();
let master={master1:true,master2:false,options:false,standard:false,gain:true};

store.getStore$().subscribe((newMaster) => {
  master = newMaster
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setMaster(newMaster) {
    store.updateStore(newMaster);
  },
  getMaster() {
    return master
  }
}
