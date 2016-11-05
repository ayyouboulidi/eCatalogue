import React, { Component } from 'react'
import selectedCategory from "../../store/selectedCategoryStore"

export default class ConfigMode extends Component {

    render(){
      let img = selectedCategory.getSelectedCategory().type ==="monument"? "/monument/GALLEY" : "/supplier/GAIN"
        return(
            <div className="width33 bgg height300">
              <img style={{height:"100%",width:"100%"}} src={"img"+img+".png"}/>
            </div>
        );
    }
}
