import React, { Component } from 'react'
import switcherView from "../store/switcherView"

export default class tooltip extends Component {
  constructor(props){
    super(props)
    this.state={
      viewMode:null
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
  }

  switchMode(){
    let mode = this.state.viewMode === "Catalog"?"Area":"Catalog"
    switcherView.setView(mode)
  }

  setModeCatalog(){
    let mode =  "Catalog"
    switcherView.setView(mode)
  }

    render(){
        return(
          this.props.page === "cabin"?
            <div style={{position:"relative",marginTop:"0.5vh"}}>
              <img title="Expand Menu" src="img/TOOLTIP.png"/>
              {this.state.viewMode != "Config"?
              <div className="switch-view" onClick={this.switchMode.bind(this)}>{this.state.viewMode == "Catalog"? "Switch to Cabin Location":"Switch to Catalog"}</div>
              :<span><img src="img/BACK-ICON-2.png" title="Back" onClick={this.setModeCatalog.bind(this)}/></span>
              }
            </div>
          :
          <div style={{position:"relative",marginTop:"0.5vh"}}>
            <img title="Expand Menu" src="img/TOOLTIP.png"/>
            <img className="blue button-menu" title="Favorites" src="img/FAVOURITE-ICON.png"/>
            <img className="blue button-menu" title="Aircraft" src="img/PROJECT-ICON.png"/>
          </div>
        );
    }
}
