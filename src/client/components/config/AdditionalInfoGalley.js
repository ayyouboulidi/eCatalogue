import React, { Component } from 'react'
import PopupImg from "../../elements/popupImg"


export default class AdditionalInfoGalley extends Component {
constructor(props){
  super(props)
  this.state={
    tabs:[
      {name:"Standard Unit",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"ARINC Size 1",pc11:2,pc12:null,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Beverage Maker",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Espresso/Cappuccino",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Water Heater",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Beverage Cup",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"ARINC Size 2",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Steam Oven",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Convection Oven",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Multifunctional Unit",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"3-Mode Fridge/Freezer",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"SCS-Chiller",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Warming Compartment",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Ice drawer",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"ARINC Size 4",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Microwave",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"Sink",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0},
      {name:"GWDU",pc11:1,pc12:2,pc13:3,pc21:0,pc22:0,pc23:0}
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
                    <th></th>
                    <th colSpan="3">Master 1</th>
                    <th colSpan="3">Master 2</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="clickable"><PopupImg id="pc11">Pre-Conf 1</PopupImg></td>
                    <td  className="clickable" ><PopupImg id="pc12">PC2</PopupImg></td>
                    <td>PC3</td>
                    <td  className="clickable"><PopupImg id="pc21">Pre-Conf 1</PopupImg></td>
                    <td  className="clickable"><PopupImg id="pc22">PC2</PopupImg></td>
                    <td>PC3</td>
                  </tr>
                  {tabs.map(function(tab,key){
                    return(
                    <tr key={key}>
                      <td>i</td>
                      <td>{tab.name}</td>
                      <td>{tab.pc11}</td>
                      <td>{tab.pc12}</td>
                      <td>{tab.pc13}</td>
                      <td>{tab.pc21}</td>
                      <td>{tab.pc22}</td>
                      <td>{tab.pc23}</td>
                    </tr>)})}
                </tbody>
                </table>
              </div>
              <div className="table-head">
                <div className="title">Data table</div>
                <div className="menu-bar"><img src="/img/UPDATE-ICON.png"/><img src="/img/EXPORT-ICON.png"/></div>
              </div>
            </div>
        );
    }
}
