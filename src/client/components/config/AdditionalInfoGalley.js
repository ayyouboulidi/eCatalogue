import React, { Component } from 'react'
import PopupImg from "../../elements/popupImg"


export default class AdditionalInfoGalley extends Component {
constructor(props){
  super(props)
  this.state={
    tabs:[
      {style:{},name:"Standard Unit",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{},name:"ARINC Size 1",pc11:2,pc12:null,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Beverage Maker",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Espresso/Cappuccino",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Water Heater",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Beverage Cup",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{},name:"ARINC Size 2",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Steam Oven",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Convection Oven",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Multifunctional Unit",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  3-Mode Fridge/Freezer",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  SCS-Chiller",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Warming Compartment",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Ice drawer",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{},name:"ARINC Size 4",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Microwave",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  Sink",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {style:{whiteSpace: "pre"},name:"  GWDU",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0}
    ],
    tabs2:[
      {name:"Electrical control panel",Master1:"x",Master2:"x"},
      {name:"Individual Air outlet (directional)",Master1:"x*",Master2:null},
      {name:"Pullout device for second container on top row",Master1:"x*",Master2:null},
      {name:"Intermediate retention device for second container",Master1:"x*",Master2:null},
      {name:"Work deck light",Master1:"x",Master2:"x"},
      {name:"Sink",Master1:null,Master2:"x"},
      {name:"Cover on sink",Master1:null,Master2:"x"},
      {name:"Water supply",Master1:"x",Master2:"x"},
      {name:"Pullout drip tray on G1FR with FCRC",Master1:"n/a",Master2:"n/a"},
      {name:"Galley Waste Disposal Unit (GWDU)",Master1:"n/a",Master2:"n/a"},
      {name:"Work deck",Master1:"x",Master2:"x"},
      {name:"Trolley bay",Master1:"x",Master2:"x"},
      {name:"Bumpers",Master1:"x",Master2:"x"},
      {name:"Kick strip",Master1:"x",Master2:"x"},
      {name:"Air Cooling Unit (ACU)",Master1:"x",Master2:"x"},
      {name:"ACU temperature settings",Master1:"x",Master2:"x"},
      {name:"Waste compartment (in aft complex)",Master1:"n/a",Master2:"n/a"},
      {name:"Latches",Master1:"x",Master2:"x"},
      {name:"Turn buttons",Master1:"x",Master2:"x"},
      {name:"Miscellaneous compartment above work deck",Master1:"x",Master2:"x"},
      {name:"Miscellaneous stowage in center column",Master1:"x",Master2:"x"}
    ]
  }
}
    render(){
      let tabs = this.state.tabs
        return(
            <div className="width80 bgg height300 additional-infos">
              <div className="table-overflow">
                <table className="width100">
                <tbody>
                  <tr>
                    <th></th>
                    <th className="border-left center" colSpan="3">Master 1</th>
                    <th className="border-left border-right center" colSpan="3">Master 2</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="border-left clickable intitle"><PopupImg id="pc11">Pre-Configuration 1</PopupImg></td>
                    <td  className="clickable intitle" ><PopupImg id="pc12">Pre-Configuration 2</PopupImg></td>
                    <td className="clickable intitle">Pre-Configuration 3</td>
                    <td  className="border-left clickable intitle"><PopupImg id="pc21">Pre-Configuration 1</PopupImg></td>
                    <td  className="clickable intitle"><PopupImg id="pc22">Pre-Configuration 2</PopupImg></td>
                    <td className="border-right clickable intitle">Pre-Configuration 3</td>
                  </tr>
                  {tabs.map(function(tab,key){
                    return(
                    <tr key={key}>
                      <td style={tab.style}>{tab.name}</td>
                      <td className="border-left">{tab.pc11}</td>
                      <td>{tab.pc12}</td>
                      <td>{tab.pc13}</td>
                      <td className="border-left">{tab.pc21}</td>
                      <td>{tab.pc22}</td>
                      <td className="border-right">{tab.pc23}</td>
                    </tr>)})}
                </tbody>
                </table>
              </div>
              <div className="table-head">
                <div className="title">Data table</div>
                <div className="menu-bar"><img title="Update" src="/img/UPDATE-ICON.png"/><img title="Export Excel" src="/img/EXPORT-ICON.png"/></div>
              </div>
            </div>
        );
    }
}
