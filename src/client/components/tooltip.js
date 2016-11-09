import React, { Component } from 'react'
import switcherView from "../store/switcherView"
import UserStore from "../store/connect"
import popupStore from "../store/popupElement"
import PopupWarning from "../elements/popupWarning"

export default class tooltip extends Component {
  constructor(props){
    super(props)
    this.state={
      viewMode:null,
      add:"DISABLED"
    }
  }

  componentWillMount(){
    this.setState({viewMode:switcherView.getView(),add:"DISABLED"})

  }

  componentDidMount() {
    this.disposable = switcherView.getStore$().subscribe((newView) => {
      this.state.viewMode = newView;
      this.state.add = "DISABLED"
      this.setState(this.state);
    })
  }

  componentWillUnmount() {
    this.disposable.dispose()
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

    this.setState({add:"ENABLED"})

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
                <PopupWarning><img className="project" title="Aircraft" src={"img/ADD-TO-PROJECT-ICON-"+this.state.add+".png"} onClick={this.addProject.bind(this)}/></PopupWarning>
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
