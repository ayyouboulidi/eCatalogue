import React, { Component } from 'react'
import PopupItem from '../elements/popup'
import categoryStore from "../store/selectedCategoryStore"

export default class ItemList extends Component {
    constructor(props){
      super(props)
      this.state={
        items:[],
        filterItems:{name:"",state:false,type:""}
      }
    }

    componentWillMount(){
      let _this = this
      $.post('/GetItems',function(data){
        if(data.code === 0){
          _this.state.items=data.result
        }
        _this.setState(_this.state)
      },"json")
    }

    componentDidMount() {
      this.disposable = categoryStore.getStore$().subscribe((newCategory) => {
        this.state.filterItems = newCategory;
        this.setState(this.state);
        let _this = this
        let key = this.state.filterItems.type
        let obj = {}
        obj[key] = this.state.filterItems.name
        if(this.state.filterItems.state){
          $.post('/GetItems',obj,function(data){
            if(data.code === 0){
              _this.state.items=data.result
              _this.setState(_this.state)
            }
          },"json")
        }
      })
    }

    render(){
      let items = this.state.items
        return(
            <div className="width75 bgcurrentproject activeoverflow height300 item-list">
              {items.map(function(item,key){
                return(
                  <PopupItem className="popup-item" id={item.id} key={key}>
                      <div className="item">
                          <div><img src="img/galley.png"/></div>
                          <div><b>{item.name}</b></div>
                          <div>{item.title} id {item.id}</div>
                      </div>
                  </PopupItem>
                )
              })}
            </div>
        );
    }
}
