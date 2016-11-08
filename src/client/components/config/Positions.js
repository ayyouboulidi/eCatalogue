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
    $.post('/GetItems',{supplier:"Gain"},function(data){
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
                        <option>x=22098,5</option>
                        <option>x=22149,3</option>
                        <option>x=22200,1</option>
                        <option>x=22250,9</option>
                        <option>x=22301,7</option>
                        <option>x=22555,7</option>
                        <option>x=22606,5</option>
                        <option>x=22809,7</option>
                        <option>x=22860,5</option>
                        <option>x=22911,3</option>
                        <option>x=22962,1</option>
                        <option>x=23012,9</option>
                        <option>x=23063,7</option>
                        <option>x=23114,5</option>
                        <option>x=23165,3</option>
                        <option>x=23216,1</option>
                        <option>x=23266,9</option>
                        <option>x=23317,7</option>
                        <option>x=23368,5</option>
                        <option>x=23419,3</option>
                        <option>x=23470,1</option>
                        <option>x=23673,3</option>
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
