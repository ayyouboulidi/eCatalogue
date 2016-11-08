import React, { Component } from 'react'
import PopupItem from "../../elements/popup"


export default class AdditionalInfoEquipment extends Component {
  constructor(props){
    super(props)
    this.state={
      items:[],
    }
  }

  componentWillMount(){
    let _this = this
    $.post('/GetItems',{monument:"Galley"},function(data){
      if(data.code === 0){
        _this.state.items=data.result
        _this.setState(_this.state)
      }
    },"json")
  }
    render(){
      let items = this.state.items
        return(
          <div className="width80 bgcurrentproject activeoverflow height300 additional-infos">
          <div className="title"> Monuments where Oven can be placed </div>
          <div className="item-overflow">
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
            </div>
          </div>
        );
    }
}
