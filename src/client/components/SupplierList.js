import React, { Component } from 'react'
import categoryStroe from "../store/selectedCategoryStore"

export default class SupplierList extends Component {
    constructor(props){
      super(props)
      this.state={
        suppliers:[]
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
      categoryStroe.setSelectedCategory({name:name,state:true,type:"supplier"})
    }

    render(){
      let suppliers = this.state.suppliers
      let _this = this
        return(
            <div className="pflex activeoverflowx height100 supplier-list">
              {suppliers.map(function(supplier,key){
                return(
                  <div className="verticalScroll" key={key}  id={supplier.name} onClick={_this.setSelectedCategory.bind(_this)}>
                    <div><img src={"img"+supplier.url}/></div>
                    <div className="supplier-id">{supplier.name}</div>
                  </div>
                )
              })}
            </div>
        );
    }
}
