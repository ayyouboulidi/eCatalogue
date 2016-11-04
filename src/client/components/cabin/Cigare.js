import React, { Component } from 'react'
import zoneFilter from '../../store/ZoneFilter'
import AccordionFilter from '../../store/AccordionFilter'

export default class Cigare extends Component {
  constructor(props){
    super(props)
    this.state={
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



  selectZone(){
    this.state.aircraftselectedzone = this.state.accordionselectedelement ?
      this.state.aircraftselectedzone : !this.state.aircraftselectedzone
    this.setState(this.state)
    zoneFilter.setAircraftZone(this.state.aircraftselectedzone)
  }

    render(){
      let img = !this.state.aircraftselectedzone && !this.state.accordionselectedelement ?
                "all":
                this.state.aircraftselectedzone && !this.state.accordionselectedelement ?
                "clicked":"selected"
        return(
            <div className="cigare">
              <img src={"img/cigare-"+img+".png"} onClick={this.selectZone.bind(this)}/>
            </div>
        );
    }
}
