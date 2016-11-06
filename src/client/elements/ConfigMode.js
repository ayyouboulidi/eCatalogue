import React, { Component } from 'react'
import selectedStore from "../store/popupElement"
import selectedCategoryStore from "../store/selectedCategoryStore"
import ThreeDModel from "../components/config/ThreeDModel"
import Positions from "../components/config/Positions"
import Features from "../components/config/Features"
import FilterConf from "../components/config/FilterConf"
import AdditionalInfoGalley from "../components/config/AdditionalInfoGalley"
import AdditionalInfoEquipment from "../components/config/AdditionalInfoEquipment"


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
      let type = selectedCategoryStore.getSelectedCategory().type
        return(
            <div className="config-mode">
              <div className="pflex first-block">
                <ThreeDModel />
                <Positions/>
                <Features/>
              </div>
              <div className="pflex second-block">
                <FilterConf/>
                {type === "monument" ? <AdditionalInfoGalley /> : <AdditionalInfoEquipment />}
              </div>
            </div>
        );
    }
}
