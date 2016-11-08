import React, { Component } from 'react'
import zoneFilter from '../../store/ZoneFilter'
import PackageFilter from '../../store/PackageFilter'
import PopupItem from '../../elements/popup'
import packageStore from "../../store/PackageStore"

export default class ProposedItem extends Component {
  constructor(props){
    super(props)
    this.state={
      proposedItems:[
        {name:"2 x Galley 4Tr",url:"2 x Galley 4Tr"},
        {name:"2 x Galley 5Tr and Galley 4Tr",url:"2 x Galley 5Tr and Galley 4Tr"},
        {name:"2 x Galley 5Tr and Lavatory PO",url:"2 x Galley 5Tr and Lavatory PO"},
        {name:"2 x Galley 5Tr and Lavatory UV",url:"2 x Galley 5Tr and Lavatory UV"},
        {name:"2 x Galley 5Tr",url:"2 x Galley 5Tr"},
        {name:"3 x Galley 4Tr",url:"3 x Galley 4Tr"},
        {name:"3 x Galley 5Tr",url:"3 x Galley 5Tr"},
        {name:"Galley 4Tr and 2 x Galley 5Tr",url:"Galley 4Tr and 2 x Galley 5Tr"},
        {name:"Galley 4Tr and Galley 5Tr and Lavatory PO",url:"Galley 4Tr and Galley 5Tr and Lavatory PO"},
        {name:"Galley 4Tr and Galley 5Tr",url:"Galley 4Tr and Galley 5Tr"},
        {name:"Galley 4Tr and Partition",url:"Galley 4Tr and Partition"},
        {name:"Galley 5Tr and Galley 4Tr",url:"Galley 5Tr and Galley 4Tr"},
        {name:"Galley 5Tr and Partition",url:"Galley 5Tr and Partition"},
        {name:"Lavatory OP and 2 x Galley 5Tr",url:"Lavatory OP and 2 x Galley 5Tr"},
        {name:"Lavatory OP and Galley 5Tr and Galley 4Tr",url:"Lavatory OP and Galley 5Tr and Galley 4Tr"},
        {name:"Lavatory VU and 2 x Galley 4Tr",url:"Lavatory VU and 2 x Galley 4Tr"},
        {name:"Partition and Galley 4Tr",url:"Partition and Galley 4Tr"},
        {name:"Partition and Galley 5Tr",url:"Partition and Galley 5Tr"}
      ],
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
  packageStore.setPackageFilter(false)
}

clickedPackage(){
  console.log(packageStore.getPackageFilter())
  packageStore.setPackageFilter(true)
  console.log(packageStore.getPackageFilter())
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
                    <div className="verticalScroll" key={key} onClick={_this.clickedPackage.bind(_this)}>
                      <div className="package-image"><img src={"img/package/"+proposedItem.url+".png"}/></div>
                      <div className="description-block">
                        <div className="package-name"><b>{proposedItem.name}</b></div>
                        <div className="package-description"></div>
                      </div>
                    </div>
                )
              })
              : null
          }
          </div>
      );
  }
}
