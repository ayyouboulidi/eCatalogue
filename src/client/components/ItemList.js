import React, { Component } from 'react'

export default class ItemList extends Component {
    constructor(props){
      super(props)
      this.state={
        items:[1,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,35,6,7,8,2,3,4,5,6,7,8]
      }
    }
    render(){
      let items = this.state.items
        return(
            <div className="width75 bgcurrentproject activeoverflow height300">
              {items.map(function(item,key){
                return(
                  <img key={key} src="img/galley.png"/>
                )
              })}
            </div>
        );
    }
}
