import Store from './store';

const store = Store();
let accordionElement = false

store.getStore$().subscribe((newAccordionElement) => {
    accordionElement = newAccordionElement;
});

export default {
  getStore$() {
    return store.getStore$();
  },
  setAccordionElement(newAccordionElement) {
      store.updateStore(newAccordionElement);
  },
  getAccordionElement() {
      return accordionElement;
  }
}
