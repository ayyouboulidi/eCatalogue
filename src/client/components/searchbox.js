import React, { Component } from 'react'
import Tooltip from './tooltip'

export default class searchBox extends Component {
    render(){
        return(
            <div className="search">
              <input type="search"/>
              <Tooltip />
            </div>
        );
    }
}
