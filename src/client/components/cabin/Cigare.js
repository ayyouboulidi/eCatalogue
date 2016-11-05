import React, { Component } from 'react'
import zoneFilter from '../../store/ZoneFilter'
import PackageFilter from '../../store/PackageFilter'

export default class Cigare extends Component {
  constructor(props){
    super(props)
    this.state={
      packageselected:false,
      accordionselectedelement:false
    }
  }

  componentWillMount(){
    this.setState({aircraftselectedzone:zoneFilter.getAircraftZone(),packageselected:PackageFilter.getPackageFilter()})
  }


  componentDidMount() {
  this.listeners = [];
  this.listeners.push(zoneFilter.getStore$().subscribe((newZone) =>{
    this.state.aircraftselectedzone = newZone;
    this.setState(this.state);
  }));

  this.listeners.push(PackageFilter.getStore$().subscribe((newZone) => {
    this.state.packageselected = newZone;
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
    this.state.aircraftselectedzone = this.state.packageselected ?
      this.state.aircraftselectedzone : !this.state.aircraftselectedzone
    this.setState(this.state)
    zoneFilter.setAircraftZone(this.state.aircraftselectedzone)
  }

    render(){
      let img = !this.state.aircraftselectedzone && !this.state.packageselected ?
                "all":
                this.state.aircraftselectedzone && !this.state.packageselected ?
                "clicked":"selected"
        return(
            <div className="cigare">
              <img src={"img/cigare-"+img+".png"} onClick={this.selectZone.bind(this)}/>
            </div>
        );
    }
}
