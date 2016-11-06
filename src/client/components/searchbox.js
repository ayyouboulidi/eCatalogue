import React, { Component } from 'react'
import Tooltip from './tooltip'

export default class searchBox extends Component {
  constructor(props){
    super(props)
  }
    render(){
        return(
            <div className="search">
              <input type="search"/>
              <Tooltip page={this.props.page} />
            </div>
        );
    }
}
