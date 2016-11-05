import React, { Component } from 'react'
import categoryStore from "../store/selectedCategoryStore"

export default class FilterPanel extends Component {
    constructor(props){
      super(props)
      this.state={
        displayFilters:{name:"",state:false,type:""},
        filters:[]
      }
    }

    componentWillMount(){
      this.setState({displayFilters:categoryStore.getSelectedCategory()})
    }

    componentDidMount() {
      this.disposable = categoryStore.getStore$().subscribe((newCategory) => {
        this.state.displayFilters = newCategory;
        this.setState(this.state);
        let _this = this
        let key = this.state.displayFilters.type === "supplier" ? "equipment":this.state.displayFilters.type
        let obj = {}
        obj[key] = this.state.displayFilters.name
        if(this.state.displayFilters.state){
          $.post('/GetFilters',obj,function(data){
            if(data.code === 0){
              _this.state.filters=data.result
            }else{
              _this.state.displayFilters.state=false
            }
            _this.setState(_this.state)
          },"json")
        }
      })
    }

    componentWillUnmount() {
      this.disposable.dispose()
    }

    render(){
      let filters = this.state.filters
      let displayFilters = this.state.displayFilters.state
        return(
            <div className="width25 filter-panel">
              <div className="filter-text">Filter by:</div>
              {displayFilters ?
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
                : <div className="how-to">Select monument or family to display filters</div>
              }
              <div className="order-text">Order By:</div>
              <div className="order-by">
                <form>
                  <input type="radio" name="order" value="new" defaultChecked/> New<br/>
                  <input type="radio" name="order" value="popular"/> Popular
                </form>
              </div>
            </div>
        );
    }
}
