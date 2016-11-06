import React, { Component } from 'react'

export default class projectList extends Component {
  constructor(props){
    super(props);
    this.state={
      projects:[]
    }
  }
  componentWillMount(){
    let _this = this
    $.post('/GetProjects',{user:"user"},function(data){
      if(data.code === 0){
        _this.state.projects=data.result
        _this.setState(_this.state)
      }
    },"json")
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
            <td>{project.id_item}</td>
            <td>{project.user}</td>
            <td>{project.date}</td>
            <td>Quantity {project.quantity}</td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
    );
  }
}
