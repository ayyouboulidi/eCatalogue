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
              <img src="img/TOOLTIP.png"/>
              {this.state.viewMode != "Config"?
              <div><img src="img/SWITCH-MODE-ICON.png" onClick={this.switchMode.bind(this)}/></div>
              :<span><img src="img/BACK-ICON-2.png" onClick={this.setModeCatalog.bind(this)}/></span>
              }
            </div>
          :
          <div style={{position:"relative",marginTop:"0.5vh"}}>
            <img src="img/TOOLTIP.png"/>
          </div>
        );
    }
}
