import React, { Component } from 'react'
import categoryStroe from "../store/selectedCategoryStore"
import PopupItem from '../elements/popup'

export default class SupplierList extends Component {
    constructor(props){
      super(props)
      this.state={
        suppliers:[],
        selected: ""
      }
    }

    componentWillMount(){
      let _this = this
      $.post('/GetSuppliers',function(data){
        _this.state.suppliers=data.result
        _this.setState(_this.state)
      },"json")
    }

    setSelectedCategory(e){
      let name = e.currentTarget.id
      let id = e.currentTarget.getAttribute("name")
      this.state.selected = id;
      this.setState(this.state);
      categoryStroe.setSelectedCategory({name:name,state:true,type:"supplier"})
    }

    displayInfos(event) {
      let id = event.currentTarget.getAttribute("name");
      let currentMonument = this.state.monuments[id -1];
    }

    render(){
      let suppliers = this.state.suppliers
      let _this = this
        return(
            <div className="pflex activeoverflowx height100 supplier-list">
              {suppliers.map(function(supplier,key){
                return(
                  <div className={(_this.state.selected == supplier.id)?"verticalScroll selected":"verticalScroll"} key={key} name={supplier.id} id={supplier.name} onClick={_this.setSelectedCategory.bind(_this)}>
                    <div><img src={"img"+supplier.url}/></div>
                    <div className="supplier-id">{supplier.name}</div>
                    <PopupItem id={supplier.id} type="supplier" key={key}>
                      <div className="infos"><img src="/img/INFOS-ICON.png" /></div>
                    </PopupItem>
                  </div>
                )
              })}
            </div>
        );
    }
}
