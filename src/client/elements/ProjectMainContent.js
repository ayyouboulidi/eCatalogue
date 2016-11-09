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
              <div className="project-section">
                <form className="subclass selected">
                  <fieldset><legend>Cabin</legend>
                  <div className="projects-table">
                    <table className="width100 padding2 projects-list">
                      <tbody>
                      {
                        this.state.projects.map(function(project,key){
                          return(
                            <tr key={key}>
                            <td><img src={"img"+project.item_url}/></td>
                            <td>{project.item_name}</td>
                            <td>{project.user}</td>
                            <td>Quantity {project.quantity}</td>
                            <td><img src="img/TRASH-ICON.png"/></td>
                            </tr>
                          )
                        })
                      }
                      </tbody>
                    </table>
                  </div>
                  </fieldset>
                </form>
                <div className="subclass unselected">Cabin System</div>
                <div className="subclass unselected">
                  Cabin System Items
                </div>
                <div className="subclass unselected">System</div>
                <div className="subclass unselected">
                  System Items
                </div>
                <div className="subclass unselected">Emergency</div>
                <div className="subclass unselected">
                  Emergency Items
                </div>
              </div>
              <div className="modal-action"><img src="/img/TRASH-ICON-2.png" /><img src="/img/EXPORT-ICON-2.png" /><img src="/img/SEND-ICON.png" /></div>
            </div>
        );
    }
}
