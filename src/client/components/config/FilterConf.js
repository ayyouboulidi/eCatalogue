import React, { Component } from 'react'
import selectedCategory from "../../store/selectedCategoryStore"


export default class FilterConf extends Component {
  constructor(props){
    super(props)
    this.state={
      filters:[{"name":"Package",values:["1 Trolley","5 Trolley"]},{"name":"Zone",values:[]},{"name":"SubZone",values:[]},{"name":"Orientation",values:[]}],
      filtersOven:[{"name":"Equipment",values:[]},{"name":"Supplier",values:[]},{"name":"System",values:[]}]
    }
  }
  render(){
    let filters = selectedCategory.getSelectedCategory().type ==="monument"? this.state.filters : this.state.filtersOven
      return(
          <div className="filter-panel height300">
            <div className="filter-text">Filter by:</div>
            {
              filters.map(function(filt,key){
                return(
                  <div className="filters-list" key={key}>
                    <select className="filters">
                        <option>{filt.name}</option>
                        {filt.values.map(function(val,key){
                          return(
                            <option key={key} value={val}>{val}</option>
                          )
                        })}
                    </select>
                  </div>
                )
              })
            }
          </div>
      );
  }
}
