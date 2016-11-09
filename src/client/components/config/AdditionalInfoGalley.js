import React, { Component } from 'react'
import PopupImg from "../../elements/popupImg"
import masterStore from "../../store/masterStore"

export default class AdditionalInfoGalley extends Component {
constructor(props){
  super(props)
  this.state={
    tabs:[
      {className:"",name:"Standard Unit",pc11:4,pc12:2,pc13:0,pc21:0,pc22:4,pc23:2},
      {className:"",name:"ARINC Size 1",pc11:0,pc12:0,pc13:0,pc21:3,pc22:3,pc23:3},
      {className:"center",name:"Beverage Maker",pc11:null,pc12: null,pc13: null,pc21:3,pc22:3,pc23:3},
      {className:"center",name:"Espresso/Cappuccino",pc11:null,pc12: null,pc13: null,pc21:3,pc22:3,pc23:3},
      {className:"center",name:"Water Heater", pc11:null,pc12: null,pc13: null,pc21:3,pc22:3,pc23:3},
      {className:"center",name:"Beverage Cup", pc11:null,pc12: null,pc13: null,pc21:3,pc22:3,pc23:3},
      {className:"",name:"ARINC Size 2",pc11:3,pc12:4,pc13:5,pc21:4,pc22:2,pc23:3},
      {className:"center",name:"Steam Oven",pc11:3,pc12:4,pc13:5,pc21:4,pc22:2,pc23:3},
      {className:"center",name:"Convection Oven", pc11:3,pc12:4,pc13:5,pc21:4,pc22:2,pc23:3},
      {className:"center",name:"Multifunctional Unit", pc11:3,pc12:4,pc13:5,pc21:4,pc22:2,pc23:3},
      {className:"center",name:"3-Mode Fridge/Freezer",pc11:1,pc12:1,pc13:1,pc21:1,pc22:1,pc23:1},
      {className:"center",name:"SCS-Chiller",pc11:2,pc12:2,pc13:2,pc21:2,pc22:2,pc23:2},
      {className:"center",name:"Warming Compartment",pc11:3,pc12:3,pc13:3,pc21:3,pc22:2,pc23:2},
      {className:"center",name:"Ice drawer",pc11: null,pc12: null,pc13: null,pc21: null,pc22:2,pc23:null},
      {className:"",name:"ARINC Size 4",pc11:0,pc12:1,pc13:0,pc21:0,pc22:1,pc23:0},
      {className:"center",name:"Microwave",pc11: null,pc12:1,pc13: null,pc21: null,pc22:1,pc23: null },
      {className:"center",name:"Sink",pc11:0,pc12:0,pc13:0,pc21:1,pc22:1,pc23:1},
      {className:"center",name:"GWDU",pc11:0,pc12:0,pc13:0,pc21:0,pc22:0,pc23:0}
    ],
    tabsbis:[
      {style:{},name:"Standard Unit",pc11:1,pc12:2,pc13:3},
      {style:{},name:"ARINC Size 1",pc11:2,pc12:null,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Beverage Maker",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Espresso/Cappuccino",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Water Heater",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Beverage Cup",pc11:1,pc12:2,pc13:3},
      {style:{},name:"ARINC Size 2",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Steam Oven",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Convection Oven",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Multifunctional Unit",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  3-Mode Fridge/Freezer",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  SCS-Chiller",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Warming Compartment",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Ice drawer",pc11:1,pc12:2,pc13:3},
      {style:{},name:"ARINC Size 4",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Microwave",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  Sink",pc11:1,pc12:2,pc13:3},
      {style:{whiteSpace: "pre"},name:"  GWDU",pc11:1,pc12:2,pc13:3}
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
    ],
    master:{master1:true,master2:false,options:false,standard:false,gain:true}
  }
}


  componentDidMount(){
    this.disposable = masterStore.getStore$().subscribe((newMaster) => {
      this.state.master = newMaster;
      this.setState(this.state);
      console.log(this.state.master)
    })
  }

    render(){
      let tabs = this.state.tabs
      let tabsbis = this.state.tabsbis
      let tabs2 = this.state.tabs2
        return(
            <div className="width80 bgg height300 additional-infos">
              <div className="table-overflow">
                <table className="width100">
                {
                  this.state.master.master1 && this.state.master.master2 && this.state.master.gain?
                  <tbody>
                    <tr>
                      <th></th>
                      <th className="border-left center" colSpan="3">Master 1</th>
                      <th className="border-left border-right center" colSpan="3">Master 2</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="clickable border-left intitle"><PopupImg id="pc11">Pre-Configuration 1</PopupImg></td>
                      <td className="clickable intitle" ><PopupImg id="pc12">Pre-Configuration 2</PopupImg></td>
                      <td className="clickable intitle border-right">Pre-Configuration 3</td>
                      <td className="clickable border-left intitle"><PopupImg id="pc21">Pre-Configuration 1</PopupImg></td>
                      <td className="clickable intitle"><PopupImg id="pc22">Pre-Configuration 2</PopupImg></td>
                      <td className="clickable border-right intitle">Pre-Configuration 3</td>
                    </tr>
                        {tabs.map(function(tab,key){
                        return(
                        <tr key={key}>
                          <td className={tab.className}>{tab.name}</td>
                          <td className="border-left center">{tab.pc11}</td>
                          <td className="center">{tab.pc12}</td>
                          <td className="center">{tab.pc13}</td>
                          <td className="border-left center">{tab.pc21}</td>
                          <td className="center">{tab.pc22}</td>
                          <td className="border-right center">{tab.pc23}</td>
                        </tr>)})
                      }
                  </tbody>
                  :this.state.master.master1 && !this.state.master.master2 && this.state.master.gain?
                  <tbody>
                    <tr>
                      <th></th>
                      <th className="border-left border-right center" colSpan="3">Master 1</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="border-left center clickable intitle"><PopupImg id="pc11">Pre-Configuration 1</PopupImg></td>
                      <td  className="clickable center intitle" ><PopupImg id="pc12">Pre-Configuration 2</PopupImg></td>
                      <td className="clickable center intitle border-right">Pre-Configuration 3</td>
                    </tr>
                      {  tabsbis.map(function(tab,key){
                        return(
                        <tr key={key}>
                          <td style={tab.style}>{tab.name}</td>
                          <td className="border-left center">{tab.pc11}</td>
                          <td className="center">{tab.pc12}</td>
                          <td className="center border-right">{tab.pc13}</td>
                        </tr>)})
                      }
                  </tbody>
                  :this.state.master.options || this.state.master.standard ?
                  <tbody>
                    <tr>
                      <th></th>
                      <th className="border-left center">Master 1</th>
                      <th className="border-left border-right center">Master 2</th>
                    </tr>
                      {  tabs2.map(function(tab,key){
                        return(
                        <tr key={key}>
                          <td>{tab.name}</td>
                          <td className="border-left center">{tab.Master1}</td>
                          <td className="border-right center">{tab.Master2}</td>
                        </tr>)})
                      }
                  </tbody>
                  :null
                }
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
