import Store from './store'

const store = Store();
let user;

store.getStore$().subscribe((newUser) => {
  user = newUser
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setUser(newUser) {
    store.updateStore(newUser);
  },
  getUser() {
    return user
  }
}
