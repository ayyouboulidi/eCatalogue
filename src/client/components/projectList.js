import React, { Component } from 'react'
import projectStore from "../store/projectList"

export default class projectList extends Component {
  constructor(props){
    super(props);
    this.state={
      projects:[]
    }
  }
  componentWillMount(){
    this.state.projects = projectStore.getProjects()
    this.setState(this.state)
  }


  render(){
    return(
      <table className="width100 padding2">
      <tbody>
      {
        this.state.projects.map(function(project,key){
          return(
            <tr key={key}>
            <td><input type="checkbox"/></td>
            <td>{project.name}</td>
            <td>{project.user}</td>
            <td>{project.date}</td>
            <td><img className="fright" src="img/DELETE-ICON-SMALL.png"/></td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
    );
  }
}
