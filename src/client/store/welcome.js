import Store from './store';

const store = Store();
let aircrafts = [
                {
                    family: "A320 Family",
                    type: "A320",
                    title : "Lorem ipsum",
                    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    lineChart : "/img/aircraft/AREA-LINE-CHART.png",
                    donutChart : "/img/aircraft/DONUT-CHART-1.png"
                },
                {
                    family: "A330 Family",
                    type: "A330",
                        title : "Lorem ipsum",
                        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                        lineChart : "/img/aircraft/AREA-LINE-CHART.png",
                        donutChart : "/img/aircraft/DONUT-CHART-1.png"
                },
                {
                    family: "A350XWB",
                    type: "A350-900",
                    title : "The Optimised Baseline",
                        text : "The A350-900 is the cornerstone member of Airbus' all-new A350 XWB Family, which is well-suited to meet airline's market requirements in medium, long, and ultra-long-haul operations.<br> As the first A350 XWB version to enter airline service, the A350-900 has the same optimised cabin cross-section as the other A350 XWB versions which ensures maximum comfort for both passengers and crew while guaranteeing operators optimum revenue potential and operating efficiency.<br> This jetliner accomodates 325 passengers in a standard three-class configuration, while offering unbeatable economics in high-density seating and true long-haul capability with a range of up  to 8,100 nautical miles.<br> The A350-900 is one of the first Airbus jetliners to apply the Airspace by Aibus cabin concept, which creates the perfect space for passenger well-being and airline performance.<br> Airspace by Airbus delivers a next generation flying experience with four key pillars:<br> comfort, service, ambience and design.",
                        lineChart : "/img/aircraft/AREA-LINE-CHART.png",
                        donutChart : "/img/aircraft/DONUT-CHART-1.png"
                },
                {
                    family: "A350XWB",
                    type: "A350-1000",
                        title : "Lorem ipsum",
                        text : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                        lineChart : "/img/aircraft/charts_pretty_full.jpg",
                        donutChart : "/img/aircraft/DONUT-CHART-2.png"
                },{
                    family: "A380",
                    type: "A380",
                        title : "Lorem ipsum",
                        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                        lineChart : "/img/aircraft/AREA-LINE-CHART.png",
                        donutChart : "/img/aircraft/DONUT-CHART-1.png"
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