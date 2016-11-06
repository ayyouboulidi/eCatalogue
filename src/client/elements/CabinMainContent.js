import React, { Component } from 'react'
import AreaMode from "./AreaMode"
import CatalogMode from "./CatalogMode"
import ConfigMode from "./ConfigMode"
import HeadCabin from "../components/HeadCabin"
import switcherView from "../store/switcherView"
import sectionNameStore from "../store/sectionName"

export default class MainContent extends Component {
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
      let prevValue = sectionNameStore.getSectionName()
      let name = this.state.viewMode === "Catalog" ? "Cabin Catalog" : this.state.viewMode === "Area" ? "Cabin Location" : "Cabin Configuration"
      let progress = "Cabin > "+prevValue.aircraft + " > " + name
      sectionNameStore.setSectionName({name:name,progress:progress,aircraft:prevValue.aircraft})
    })
  }

  componentWillUnmount() {
    this.disposable.dispose()
  }

    render(){
      let switcher = this.state.viewMode
        return(
            <div className="content">
              <HeadCabin/>
              {
                switcher === "Catalog"?
                <CatalogMode />
                :switcher === "Area"?
                <AreaMode />
                :<ConfigMode/>
              }
            </div>
        );
    }
}
