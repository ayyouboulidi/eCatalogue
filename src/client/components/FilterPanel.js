import React, { Component } from 'react'
import categoryStore from "../store/selectedCategoryStore"

export default class FilterPanel extends Component {
    constructor(props){
      super(props)
      this.state={
        displayFilters:{name:"",state:false},
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
        if(this.state.displayFilters.state){
          $.post('/GetFilters',{monument:_this.state.displayFilters.name},function(data){
            if(data.code === 0){
              console.log(data.result)
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
              Filter by:
              {displayFilters ?
                filters.map(function(filt,key){
                  return(
                    <div className="filters-list" key={key}>
                      <select>
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
              Order By:
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
