import React, { Component } from 'react'
import selectedStore from "../store/popupElement"
import ThreeDModel from "../components/config/ThreeDModel"
import Positions from "../components/config/Positions"
import Features from "../components/config/Features"
import FilterConf from "../components/config/FilterConf"
import AdditionalInfo from "../components/config/AdditionalInfo"


export default class ConfigMode extends Component {
  constructor(props){
    super(props)
    this.state={
      item : null
    }
  }

  componentWillMount(){
    let item = selectedStore.getItem().id
    this.setState({item:item})
  }

    render(){
        return(
            <div>
              <div className="pflex">
                <ThreeDModel />
                <Positions/>
                <Features/>
              </div>
              <div className="pflex">
                <FilterConf/>
                <AdditionalInfo />
              </div>
            </div>
        );
    }
}
