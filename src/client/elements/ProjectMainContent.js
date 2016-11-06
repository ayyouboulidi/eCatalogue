import React, { Component } from 'react'
import connectStore from "../store/connect"
import sectionNameStore from "../store/sectionName"
import SearchBox from "../components/searchbox"
import Title from "../components/title"
import UserStore from '../store/connect'

export default class ProjectMainContent extends Component {
  constructor(props){
    super(props)
    this.state={
      projects:[]
    }
  }
  componentWillMount(){
    let prevValue = sectionNameStore.getSectionName()
    let progress = "My projects > "+prevValue.aircraft + " > List of items"
    sectionNameStore.setSectionName({name:"My Projects",progress:progress,aircraft:prevValue.aircraft})
    let user = UserStore.getUser()
    let _this = this
    $.post('/GetProjects',{user:user},function(data){
      if(data.code === 0){
        _this.state.projects=data.result
        _this.setState(_this.state)
      }
    },"json")
  }
    render(){
      let user = connectStore.getUser()
        return(
            <div className="content">
              <div className="headdashboard">
                <Title />
                <SearchBox page="all" />
              </div>
              <div>
                <div>cabin</div>
                <div>
                  <table className="width100 padding2">
                    <tbody>
                    {
                      this.state.projects.map(function(project,key){
                        return(
                          <tr key={key}>
                          <td><img src="img/monument/GALLEY.png"/></td>
                          <td>{project.id_item} {project.user} {project.date}</td>
                          <td>Quantity {project.quantity}</td>
                          <td><img src="img/TRASH-ICON.png"/></td>
                          </tr>
                        )
                      })
                    }
                    </tbody>
                  </table>
                </div>
                <div>cabin System</div>
                <div>
                  Cabin System Items
                </div>
                <div>System</div>
                <div>
                  System Items
                </div>
                <div>Emergency</div>
                <div>
                  Emergency Items
                </div>
              </div>
            </div>
        );
    }
}
