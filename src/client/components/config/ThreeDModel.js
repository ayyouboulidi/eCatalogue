import React, { Component } from 'react'
import selectedCategory from "../../store/selectedCategoryStore"

export default class ConfigMode extends Component {

    render(){
      let img = selectedCategory.getSelectedCategory().type ==="monument"? "/Galley-5Tr-1" : "/supplier/GAIN"
      let text = selectedCategory.getSelectedCategory().type ==="monument"? "GALLEY" : "GAIN"
        return(
            <div className="width33 bgg height300 three-model">
                <div className="title">{text}</div>
              <img src={"img"+img+".png"}/>
            </div>
        );
    }
}
