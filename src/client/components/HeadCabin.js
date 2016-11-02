import React, { Component } from 'react'
import switcherView from "../store/switcherView"
import SearchBox from "./searchbox"
import Title from "./title"

export default class HeadCabin extends Component {
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
      <div className="headdashboard">
      <Title />
      {this.state.viewMode != "Config"?
      <button className="switchButton" onClick={this.switchMode.bind(this)}>
        {"Switch to "+this.state.viewMode+" Mode"}
      </button>
      :<span>You are in the config mode <button onClick={this.setModeCatalog.bind(this)}>go back to catalog</button></span>
      }
      <SearchBox />
      </div>
    );
  }
}
