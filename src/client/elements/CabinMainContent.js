import React, { Component } from 'react'
import AreaMode from "./AreaMode"
import CatalogMode from "./CatalogMode"
import HeadCabin from "../components/HeadCabin"
import switcherView from "../store/switcherView"

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
              {switcher === "Catalog"?<CatalogMode />:<AreaMode />}
            </div>
        );
    }
}
