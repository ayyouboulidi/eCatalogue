import React, { Component } from 'react'

export default class ProposedItem extends Component {
  constructor(props){
    super(props)
    this.state={
      proposedItems:[1,2,3,4,5,6,7,8,9,10,22]
    }
  }
  render(){
    let proposedItems = this.state.proposedItems
      return(
          <div className="pflex activeoverflowx height100">
            {proposedItems.map(function(proposedItem,key){
              return(
                <div className="verticalScroll" key={key}>
                  <div><img src="img/galley.png"/></div>
                  <div><b>Galley</b></div>
                  <div>Description {proposedItem}</div>
                </div>
              )
            })}
          </div>
      );
  }
}
