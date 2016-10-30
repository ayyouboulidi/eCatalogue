import React, { Component } from 'react'

export default class SupplierList extends Component {
    constructor(props){
      super(props)
      this.state={
        suppliers:[1,2,3,4,5,6,7,8,9,10,22]
      }
    }
    render(){
      let suppliers = this.state.suppliers
        return(
            <div className="pflex activeoverflowx height100">
              {suppliers.map(function(supplier,key){
                return(
                  <div className="verticalScroll" key={key}>
                    <div><img src="img/galley.png"/></div>
                    <div>Name {supplier}</div>
                  </div>
                )
              })}
            </div>
        );
    }
}
