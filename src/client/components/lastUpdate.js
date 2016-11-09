import React, { Component } from 'react';

export default class lastUpdate extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[
        {name:"Beverage",date:"06/11/2016",img:"BEVERAGE-MAKER"},
        {name:"Cabinet",date:"16/10/2016",img:"CABINET"},
        {name:"Counter",date:"02/11/2016",img:"CLASSIC-COUNTERTOP"},
        {name:"Fridge",date:"26/11/2016",img:"FRIDGE"},
        {name:"Micorowave",date:"06/10/2015",img:"IPECO-MICROWAVE"},
        {name:"Multi",date:"06/01/2016",img:"MULTIFONCTIONAL"},
        {name:"Nespresso",date:"06/11/2016",img:"NESPRESSO-MAKER"},
        {name:"Oven",date:"06/11/2016",img:"OVEN"},
        {name:"Tap water",date:"06/11/2016",img:"TAP-WATER"},
        {name:"Trash",date:"06/11/2016",img:"TRASH"},
        {name:"Trolley",date:"06/11/2016",img:"TROLLEY"},
        {name:"Heater",date:"06/11/2016",img:"WATER-HEATER"},
      ]
    }
  }
    render(){
      return(
          <div className="width25 fright bgchecklist prelative">
            <div className="second_title"><span>Last updates</span><img style={{"float":"right"}} title="Delete All" src="/img/TRASH-ICON.png" /></div>
            <div className="activeoverflow height250">
              <table className="width100 padding2 last-visits-list">
                <tbody>
                  {
                    this.state.items.map(function(item,key){
                      return(
                      <tr key={key} className="last-visit-details">
                        <td className="read-status">Last Update</td>
                        <td className="last-visit-description">{item.date}</td>
                      </tr>
                    )
                    })
                  }
                </tbody>
              </table>

            </div>
            <input type="submit" value="View Details" className="view_details"/>
          </div>
      );
    }
}
