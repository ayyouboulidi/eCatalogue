import React, { Component } from 'react'
import {Accordion,Panel} from 'react-bootstrap'
import zoneFilter from '../../store/ZoneFilter'
import PackageFilter from '../../store/PackageFilter'
import PopupItem from '../../elements/popup'

export default class AccordionElements extends Component {
  constructor(props){
    super(props)
    this.state={
      aircraftselectedzone:false,
      packageSelectedItem:false,
      items:[]
    }
  }

  componentWillMount(){
    this.setState({aircraftselectedzone:zoneFilter.getAircraftZone(),packageSelectedItem:PackageFilter.getPackageFilter()})
    let _this = this
    if(this.state.aircraftselectedzone){
      $.post('/GetItems',{monument:"Galley"},function(data){
        if(data.code === 0){
          _this.state.items=data.result
          _this.setState(_this.state)
        }
      },"json")
    }else{
      $.post('/GetItems',function(data){
        if(data.code === 0){
          _this.state.items=data.result
          _this.setState(_this.state)
        }
      },"json")
    }
  }


  componentDidMount() {
  this.listeners = [];
  this.listeners.push(zoneFilter.getStore$().subscribe((newZone) =>{
    this.state.aircraftselectedzone = newZone;
    this.setState(this.state);
  }));

  this.listeners.push(PackageFilter.getStore$().subscribe((newZone) => {
    this.state.packageSelectedItem = newZone;
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
      let items = this.state.items
        return(
            <div>
              <Accordion>
                <Panel header="Galley" eventKey="1">
                  <div className="item-list">
                    {items.map(function(item,key){
                      return(
                        <PopupItem className="popup-item" id={item.id} key={key}>
                            <div className="item">
                                <div><img src={"img"+item.url_image}/></div>
                                <div><b>{item.name}</b></div>
                            </div>
                        </PopupItem>
                      )
                    })}
                  </div>
                </Panel>
                <Panel header="Lavatory" eventKey="2">
                  Lavatory
                </Panel>
                <Panel header="Seats" eventKey="3">
                  Seats
                </Panel>
                <Panel header="Partition" eventKey="4">
                  Partition
                </Panel>
              </Accordion>
            </div>
        );
    }
}
