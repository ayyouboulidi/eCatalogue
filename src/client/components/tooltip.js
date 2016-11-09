import React, { Component } from 'react'
import switcherView from "../store/switcherView"
import UserStore from "../store/connect"
import popupStore from "../store/popupElement"

export default class tooltip extends Component {
  constructor(props){
    super(props)
    this.state={
      viewMode:null,
      add:"DISABLED"
    }
  }

  componentWillMount(){
    this.setState({viewMode:switcherView.getView()})
  }

  componentDidMount() {
    this.disposable = switcherView.getStore$().subscribe((newView) => {
      this.state.viewMode = newView;
      this.setState(this.state);
    })
  }

  componentWillUnmount() {
    this.disposable.dispose()
    this.setState({add:"DISABLED"})
  }

  switchMode(){
    let mode = this.state.viewMode === "Catalog"?"Area":"Catalog"
    switcherView.setView(mode)
  }

  setModeCatalog(){
    let mode =  "Catalog"
    switcherView.setView(mode)
  }

  addProject(){
    let _this = this
    let user = UserStore.getUser()
    let item =  popupStore.getItem().id
    let obj=[{user:user,id_item:item,quantity:3}]
    $.post('/AddProjects',{projects:obj},function(data){
      if(data.code === 0){
        _this.setState({add:"ENABLED"})
      }else if (data.code === -1){
        _this.setState({add:"DISABLED"})
        alert("An Error happened please try later")
      }
    },"json")
  }

    render(){
        return(
          this.props.page === "cabin"?
            <div style={{position:"relative",marginTop:"0.5vh"}}>
              <img title="Expand Menu" src="img/TOOLTIP.png"/>
              {this.state.viewMode != "Config"?
              <div>
                <div className="switch-view" onClick={this.switchMode.bind(this)}>{this.state.viewMode == "Catalog"? "Switch to Cabin Location":"Switch to Catalog"}</div>
              </div>
              :<span>
                <img className="blue button-menu" title="Favorites" src="img/FAVOURITE-ICON.png"/>
                <img className="project" title="Aircraft" src={"img/ADD-TO-PROJECT-ICON-"+this.state.add+".png"}  onClick={this.addProject.bind(this)}/>
                <img src="img/BACK-ICON-2.png" title="Back" onClick={this.setModeCatalog.bind(this)}/>
              </span>
              }
            </div>
          :
          <div style={{position:"relative",marginTop:"0.5vh"}}>
            <img title="Expand Menu" src="img/TOOLTIP.png"/>
          </div>
        );
    }
}
