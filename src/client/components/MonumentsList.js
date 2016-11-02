import React, { Component } from 'react'

export default class MonumentsList extends Component {
    constructor(props){
      super(props)
      this.state={
        monuments:[]
      }
    }

    componentWillMount(){
      let _this = this
      $.post('/GetMonuments',function(data){
        _this.state.monuments=data.result
        _this.setState(_this.state)
      },"json")
    }

    render(){
      let monuments = this.state.monuments
        return(
            <div className="pflex activeoverflowx height100">
              {monuments.map(function(monument,key){
                return(
                  <div className="verticalScroll" key={key}>
                    <div><img src="img/galley.png"/></div>
                    <div><b>{monument.name}</b></div>
                    <div>{monument.description} id {monument.id}</div>
                  </div>
                )
              })}
            </div>
        );
    }
}
