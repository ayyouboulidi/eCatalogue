import React, { Component } from 'react'
import {Accordion,Panel} from 'react-bootstrap'
import zoneFilter from '../../store/ZoneFilter'
import AccordionFilter from '../../store/AccordionFilter'

export default class AccordionElements extends Component {
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
    this.state.accordionselectedelement = this.state.aircraftselectedzone ?
      this.state.accordionselectedelement : !this.state.accordionselectedelement
    this.setState(this.state)
    AccordionFilter.setAccordionElement(this.state.accordionselectedelement)
  }

    render(){
      let elements = !this.state.aircraftselectedzone && !this.state.accordionselectedelement ?
                "all":
                !this.state.aircraftselectedzone && this.state.accordionselectedelement ?
                "filtered by accordion":"filtered by zone"
        return(
            <div>
              <Accordion>
                <Panel header="Cabin" eventKey="1" onClick={this.selectZone.bind(this)}>
                  {elements}
                </Panel>
                <Panel header="Cabin System" eventKey="2">
                balbal
                </Panel>
                <Panel header="System Airplane" eventKey="3">
                btoto
                </Panel>
                <Panel header="Crew" eventKey="4">
                  yoyo
                </Panel>
              </Accordion>
            </div>
        );
    }
}
