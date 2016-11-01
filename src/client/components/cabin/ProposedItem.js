import React, { Component } from 'react'
import zoneFilter from '../../store/ZoneFilter'
import AccordionFilter from '../../store/AccordionFilter'

export default class ProposedItem extends Component {
  constructor(props){
    super(props)
    this.state={
      proposedItems:[1,2,3,4,5,6,7,8,9,10,22],
      aircraftselectedzone:false,
      accordionselectedelement:false
    }
  }

  componentWillMount(){
    this.setState({aircraftselectedzone:zoneFilter.getAircraftZone(),accordionselectedelement:AccordionFilter.getAccordionElement()})
  }


  componentDidMount() {
  this.listeners = [];
  this.listeners.push(zoneFilter.getStore$().subscribe((newZone) =>{
    this.state.aircraftselectedzone = newZone;
    this.setState(this.state);
  }));

  this.listeners.push(AccordionFilter.getStore$().subscribe((newZone) => {
    this.state.accordionselectedelement = newZone;
    this.setState(this.state);
  }))
  this.setState(this.state)
}

componentWillUnmount() {
  this.listeners.forEach(function(listener) {
    if(typeof listener.dispose === "function") {
      listener.dispose();
    }
  })
}

  render(){
    let proposedItems = this.state.proposedItems
    let displayItems = this.state.aircraftselectedzone || this.state.accordionselectedelement
      return(
          <div className="pflex activeoverflowx height100">
            {
              displayItems ?
              proposedItems.map(function(proposedItem,key){
                return(
                  <div className="verticalScroll" key={key}>
                    <div><img src="img/galley.png"/></div>
                    <div><b>Galley</b></div>
                    <div>Description {proposedItem}</div>
                  </div>
                )
              })
              : null
          }
          </div>
      );
  }
}
