import Store from './store'

const store = Store();
let category= {name:"",state:false,type:""};

store.getStore$().subscribe((newCategory) => {
  category = newCategory
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setSelectedCategory(newCategory) {
    store.updateStore(newCategory);
  },
  getSelectedCategory() {
    return category
  }
}
