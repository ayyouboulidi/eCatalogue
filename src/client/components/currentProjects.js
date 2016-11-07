import React, { Component } from 'react'
import ActionsMenu from "./actionMenu"
import ProjectList from "./projectList"
import { Link } from 'react-router'

export default class currentProjects extends Component {
    render(){
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
                <div className="fleft"><b>9</b> Items</div>
                <div className="fright"><Link to="/project"><input type="submit" className="view_details" value="View Details" /></Link></div>
              </div>
            </div>
        );
    }
}
