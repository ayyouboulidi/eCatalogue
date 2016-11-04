import Store from './store';

const store = Store();
let aircrafts = [
                {
                    family: "A320 Family",
                    type: "A320",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },
                {
                    family: "A330 Family",
                    type: "A330",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },
                {
                    family: "A350XWB",
                    type: "A350-900",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },
                {
                    family: "A350XWB",
                    type: "A350-1000",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                },{
                    family: "A380",
                    type: "A380",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                }
            ];
let family = [
    {
        name : "A320 Family",
        description: "The Market Leader",
        image:"/img/aircraft/A320.png"
    },
    {
        name : "A330 Family",
        description: "Modern, Versatile and efficient aircraft",
        image:"/img/aircraft/A330.png"
    },
    {
        name : "A350XWB",
        description: "New-generation flying experience",
        image:"/img/aircraft/A350.png"
    },
    {
        name : "A380",
        description: "The best solution for 21st century growth",
        image:"/img/aircraft/A380.png"
    }
]

store.getStore$().subscribe((newAircrafts) => {
    aircrafts = newAircrafts;
})
store.getStore$().subscribe((newFamily) => {
    family = newFamily;
});

export default {
  getStore$() {
    return store.getStore$();
  },
  setAircrafts(newAircrafts) {
    store.updateStore(newAircrafts);
  },
  getAircrafts() {
    return aircrafts;
  },
  setFamly(newFamily) {
      store.updateStore(newFamily);
  },
  getFamily() {
      return family;
  }
}