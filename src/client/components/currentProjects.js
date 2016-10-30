import React, { Component } from 'react'
import ActionsMenu from "./actionMenu"
import ProjectList from "./projectList"

export default class currentProjects extends Component {
    render(){
        return(
            <div className="width50 fleft bgcurrentproject prelative">
              <div className="height50">
                <div className="fleft">My Current projects</div>
                <ActionsMenu className="fright"/>
              </div>
              <div className="activeoverflow height400 mleft mright">
                <ProjectList />
              </div>
              <div className="width100 pabsolute pbottom">
                <div className="fleft"><b>13</b> Items</div>
                <div className="fright"><img src="img/VIEW-DETAILS.png"/></div>
              </div>
            </div>
        );
    }
}
