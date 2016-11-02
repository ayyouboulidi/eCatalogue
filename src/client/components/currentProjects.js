import React, { Component } from 'react'
import projectStore from "../store/projectList"
import ActionsMenu from "./actionMenu"
import ProjectList from "./projectList"

export default class currentProjects extends Component {
    render(){
      let projects = projectStore.getProjects();
        return(
            <div className="width50 fleft bgcurrentproject prelative">
              <div className="height50">
                <div className="second_title fleft">My Current projects</div>
                <ActionsMenu className="fright"/>
              </div>
              <div className="activeoverflow height400 mleft mright">
                <ProjectList />
              </div>
              <div className="width100 pabsolute pbottom">
                <div className="fleft"><b>{projects.length}</b> Items</div>
                <div className="fright"><input type="submit" className="view_details" value="View Details" /></div>
              </div>
            </div>
        );
    }
}
