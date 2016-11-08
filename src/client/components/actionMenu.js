import React, { Component } from 'react'

export default class actionMenu extends Component {
    render(){
        return(
            <div className="fright padding2">
              <img title="Export Excel" src="img/EXPORT-ICON.png"/>
              <img title="Delete Project" src="img/DELETE-ICON.png"/>
              <img title="Delete All" src="img/TRASH-ICON.png"/>
            </div>
        );
    }
}
