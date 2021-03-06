import React, { Component } from 'react'
import ActionsMenu from "./actionMenu"
import ProjectList from "./projectList"
import { Link } from 'react-router'
import UserStore from '../store/connect'

export default class currentProjects extends Component {
    constructor(props){
      super(props);
      this.state = {
        count: 0
      }
    }
    componentWillMount(){
      let self = this;
      let user = UserStore.getUser();
      fetch('/GetProjects',{
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          user: user
        })
      }).then((response)=>{
        response.json().then((json)=>{
          self.state.count = json.result.length;
          self.setState(self.state);
        });
      })
    }
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
                <div className="fleft"><b>{this.state.count}</b> Items</div>
                <div className="fright"><Link to="/project"><input type="submit" className="view_details" value="View Details" /></Link></div>
              </div>
            </div>
        );
    }
}
