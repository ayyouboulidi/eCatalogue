import React, { Component } from 'react'
import categoryStroe from "../store/selectedCategoryStore"
import PopupInfo from '../elements/popupInfo'
import categoryStore from "../store/selectedCategoryStore"

export default class MonumentsList extends Component {
    constructor(props){
      super(props)
      this.state={
        monuments:[],
        selected: "",
        selectedCategory:{}
      }
    }

    componentWillMount(){
      let _this = this
      $.post('/GetMonuments',function(data){
        _this.state.monuments=data.result
        _this.setState(_this.state)
      },"json")
    }

    componentDidMount(){
      this.disposable = categoryStore.getStore$().subscribe((newCategory) => {
        this.state.selectedCategory = newCategory;
        this.setState(this.state);
      })
    }

    setSelectedCategory(e){
      let name = e.currentTarget.id
      let id = e.currentTarget.getAttribute("name")
      this.state.selected = id;
      this.setState(this.state);
      categoryStroe.setSelectedCategory({name:name,state:true,type:"monument"})
    }

    displayInfos(event) {
      let id = event.currentTarget.getAttribute("name");
      let currentMonument = this.state.monuments[id -1];
    }

    render(){
      let monuments = this.state.monuments;
      let _this = this;
        return(
            <div className="pflex activeoverflowx height100 monument-list">
              {monuments.map(function(monument,key){
                return(
                  <div className={(_this.state.selected == monument.id && _this.state.selectedCategory.type === "monument")?"verticalScroll selected":"verticalScroll"} key={key} name={monument.id} id={monument.name} onClick={_this.setSelectedCategory.bind(_this)}>
                    <div><img src={"img"+monument.url}/></div>
                    <div className="monument-name"><b>{monument.name}</b></div>
                    <PopupInfo id={monument.id} type="monument" key={key}>
                      <div className="infos" name={monument.id} onClick={_this.displayInfos.bind(_this)}><img src="/img/INFOS-ICON.png" /></div>
                    </PopupInfo>
                  </div>
                )
              })}
            </div>
        );
    }
}
