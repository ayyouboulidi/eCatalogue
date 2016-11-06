import React, { Component } from 'react'
import selectedCategory from "../../store/selectedCategoryStore"
import PopupItem from '../../elements/popup'


export default class Positions extends Component {
  constructor(props){
    super(props)
    this.state={
      items:[],
    }
  }

  componentWillMount(){
    let _this = this
    $.post('/GetItems',{equipment:"Gain"},function(data){
      if(data.code === 0){
        _this.state.items=data.result
        _this.setState(_this.state)
      }
    },"json")
  }


    render(){
      let items = this.state.items
        return(
          selectedCategory.getSelectedCategory().type ==="monument"?
            <div className="width33 bgy height300 positions">
              <div className="title">Positions</div>
              <img src="img/position.png"/>
                    <div className="filters-list">
                      <select className="filters">
                          <option>x-position</option>
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                      </select>
                    </div>
            </div>
            :
            <div className="width33 bgcurrentproject activeoverflow height300 positions">
              <div className="item-list">
                {items.map(function(item,key){
                  return(
                    <PopupItem className="popup-item" id={item.id} key={key}>
                        <div className="item">
                            <div className="item-image"><img src={"img"+item.url_image}/></div>
                            <div className="item-name"><b>{item.name}</b></div>
                        </div>
                      </PopupItem>
                  )
                })}
              </div>
            </div>
        );
    }
}
