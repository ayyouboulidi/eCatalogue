import Store from './store';

const store = Store();
let aircrafts = [
                {
                    family: "A320 Family",
                    type: "A320",
                    title : "The founding member of the Airbus Single-Aisle Family",
                    text : "Airbus launched its single-aisle product line with the A320, which continues to set industry standards for comfort and operating economy on short- to medium-haul routes.   The A320 is in widespread use around the globe, with a range of up to 6,480 km. (3,500 nautical miles). It is capable of flying routes ranging from short European commuter sectors and charter operations to coast-to-coast U.S. flights, and more.<br> The A320 typically seats 150 passengers in a two-class cabin – or up to 180 in a high-density layout for low-cost and charter flights.  As a result of an optimised cabin space and increased exit limits, the A320neo (new engine option) accommodates 165 passengers in two classes or up to 189 in a high-density configuration.<br> The A320’s advanced technology includes the extensive use of weight-saving composites, an optimised wing that is 20 per cent more efficient than previous designs, a centralised fault display for easier troubleshooting and lower maintenance costs, along with Airbus’ fly-by-wire flight controls.<br> Advantages of the fly-by-wire controls – which were pioneered on the A320 – are many.  They provide total flight envelope and airframe structural protection for improved safety and reduced pilot workload, along improved flight smoothness and stability, and fewer mechanical parts.",
                    lineChart : "/img/aircraft/AREA-LINE-CHART.png",
                    donutChart : "/img/aircraft/DONUT-CHART-1.png"
                },
                {
                    family: "A330 Family",
                    type: "A330",
                    title : "Modern, Versatile and Efficient Widebody Aircraft",
                    text : "Benefiting from over 20 years of continuous incremental innovation, the A330 is the most modern, profitable and reliable family aircraft in the market, providing a tailored solution for every market today and for the future and an ideal complement to its sister aircraft: the all-new A350 XWB.<br> The A330 Family, part of Airbus’ widebody family, has five in-service members – the A330-200, A330-300, A330-200F, ACJ330 and A330 MRTT – along with two A330neo (New Engine Option) versions – the A330-800 and the A330-900, which were launched in 2014.<br> Low operating costs, high efficiency, flexibility and optimised performance make the A330 Family popular with an ever-increasing operator base, as well as passengers – who enjoy a truly 21st century travel experience. In addition to offering more personal space with Airbus’ modern long-haul comfort standard of 18-inch wide seats for economy class, A330s also provide the quietest cabins in their class and the latest in-flight entertainment – including video-on-demand, and mobile phone and email connectivity via satellite.<br> The A330 remains the preferred choice for over 100 airlines worldwide who continue to benefit from its proven and unrivalled low operating costs. From 30-minute flights up to 15-hour long-haul services, the A330 offers the most efficient option. Spanning 200-440 seats, the A330 does not compromise on comfort, while being one of the most reliable aircraft ever with average operational reliability of 99.4 per cent. Every 20 seconds, an A330 aircraft takes-off or lands somewhere in the world.",
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
                    title : "Enhanced Range and Performance",
                    text : "Measuring nearly 74 metres from nose to tail, the A350-1000 – scheduled to enter service in 2017 – is the longest-fuselage version of Airbus’ all-new family of widebody jetliners, which is designed for high efficiency, maximum reliability and optimised performance.<br> In a typical three-class configuration, featuring Airbus’ 18-inch-wide economy class seats for modern comfort, the A350-1000 seats a total of 366 passengers. Combined with a range of 7,950 nautical miles, this represents a significant revenue-generating advantage for operators. The aircraft also can be configured for a higher-density layout to accommodate up to 440 passengers.<br> As a member of the A350 XWB Family, the A350-1000 is helping found the Airspace by Airbus cabin concept, which creates the perfect space for both airlines and their passengers. Airbus is committed to delivering superior performance and passenger experience, and its Airspace by Airbus philosophy delivers a next-generation cabin concept inspired by four key attributes: comfort, service, ambience and design.",
                    lineChart : "/img/aircraft/charts_pretty_full.jpg",
                    donutChart : "/img/aircraft/DONUT-CHART-2.png"
                },{
                    family: "A380",
                    type: "A380",
                    title : "Increasing Profitability",
                    text : "With the A380, the sky is yours. Designed for air transport needs in the 21st century, its unique size allows airlines to maximize their revenue potential through an optimized, segmented cabin. The A380 cabin is the quietest and most spacious in the sky for passengers – offering layouts ranging from comfortable 18-inch seats at 11-abreast in economy up to a private three-room suite.  It is no wonder travellers opt for the comfort of the A380 when given the choice. This results in higher market shares, higher load factors and higher revenues – allowing airlines to increase their contribution to profit by up to 75 per cent per flight.",
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