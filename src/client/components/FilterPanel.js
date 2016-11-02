import React, { Component } from 'react'

export default class FilterPanel extends Component {
    constructor(props){
      super(props)
      this.state={
        filters:[]
      }
    }

    componentWillMount(){
      let _this = this
      $.post('/GetFilters',{monument:"Galley"},function(data){
        _this.state.filters=data.result
        _this.setState(_this.state)
      },"json")
    }

    render(){
      let filters = this.state.filters
        return(
            <div className="width25">
              Filter by:
              {
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
