import React, { Component } from 'react'
import zoneFilter from '../../store/ZoneFilter'
import PackageFilter from '../../store/PackageFilter'
import PopupItem from '../../elements/popup'

export default class ProposedItem extends Component {
  constructor(props){
    super(props)
    this.state={
      proposedItems:[1,2,3,4,5,6,7,8,9,10,22],
      aircraftselectedzone:false,
      packageselected:false
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




  render(){
    let proposedItems = this.state.proposedItems
    let displayItems = this.state.aircraftselectedzone
    let _this = this
      return(
          <div className="pflex activeoverflowx height100">
            {
              displayItems ?
              proposedItems.map(function(proposedItem,key){
                return(
                    <div className="verticalScroll" >
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
