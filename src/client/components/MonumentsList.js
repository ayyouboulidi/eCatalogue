import React, { Component } from 'react'

export default class MonumentsList extends Component {
    constructor(props){
      super(props)
      this.state={
        monuments:[1,2,3,4,5,6,7,8,9,10,22]
      }
    }
    render(){
      let monuments = this.state.monuments
        return(
            <div className="pflex activeoverflowx height100">
              {monuments.map(function(monument,key){
                return(
                  <div className="verticalScroll" key={key}>
                    <div><img src="img/galley.png"/></div>
                    <div><b>Galley</b></div>
                    <div>Description {monument}</div>
                  </div>
                )
              })}
            </div>
        );
    }
}
