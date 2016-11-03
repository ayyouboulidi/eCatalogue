import React, { Component } from 'react'
import categoryStroe from "../store/selectedCategoryStore"

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

    setSelectedCategory(e){
      let name = e.currentTarget.id
      categoryStroe.setSelectedCategory({name:name,state:true})
    }

    render(){
      let monuments = this.state.monuments
      let _this = this
        return(
            <div className="pflex activeoverflowx height100 monument-list">
              {monuments.map(function(monument,key){
                return(
                  <div className="verticalScroll" key={key} id={monument.name} onClick={_this.setSelectedCategory.bind(_this)}>
                    <div><img src="img/galley.png"/></div>
                    <div className="monument-name"><b>{monument.name}</b></div>
                    <div className="monument-description">{monument.description} id {monument.id}</div>
                  </div>
                )
              })}
            </div>
        );
    }
}
