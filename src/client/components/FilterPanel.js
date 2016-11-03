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
        if(this.state.displayFilters.state){
          $.post('/GetFilters',{monument:_this.state.displayFilters.name},function(data){
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
            <div className="width25">
              Filter by:
              {displayFilters ?
                filters.map(function(filt,key){
                  return(
                    <div key={key}>
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
                : <div>Select monument or family to display filters</div>
              }
              Order By:
              <div>
                <form>
                  <input type="radio" name="order" value="new" defaultChecked/> New<br/>
                  <input type="radio" name="order" value="popular"/> Popular
                </form>
              </div>
            </div>
        );
    }
}
