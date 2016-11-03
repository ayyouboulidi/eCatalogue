import React, { Component } from 'react'
import PopupItem from '../elements/popup'

export default class ItemList extends Component {
    constructor(props){
      super(props)
      this.state={
        items:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    }
    render(){
      let items = this.state.items
        return(
            <div className="width75 bgcurrentproject activeoverflow height300 item-list">
              {items.map(function(item,key){
                return(
                  <PopupItem className="popup-item" id={item} key={key}>
                    <img src="img/galley.png"/>
                  </PopupItem>
                )
              })}
            </div>
        );
    }
}
