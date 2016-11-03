import React, { Component } from 'react'
import categoryStroe from "../store/selectedCategoryStore"

export default class SupplierList extends Component {
    constructor(props){
      super(props)
      this.state={
        suppliers:[{name:"Neil",id:1},{name:"Neil",id:1},{name:"Neil",id:1},{name:"Neil",id:1},{name:"Neil",id:1}]
      }
    }

    setSelectedCategory(e){
      let name = e.currentTarget.id
      categoryStroe.setSelectedCategory({name:name,state:true})
    }

    render(){
      let suppliers = this.state.suppliers
      let _this = this
        return(
            <div className="pflex activeoverflowx height100 supplier-list">
              {suppliers.map(function(supplier,key){
                return(
                  <div className="verticalScroll" key={key}  id={supplier.name} onClick={_this.setSelectedCategory.bind(_this)}>
                    <div><img src="img/galley.png"/></div>
                    <div className="supplier-id">Name {supplier.id}</div>
                  </div>
                )
              })}
            </div>
        );
    }
}
