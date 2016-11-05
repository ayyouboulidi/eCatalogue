import React, { Component } from 'react'
import selectedCategory from "../../store/selectedCategoryStore"

export default class Features extends Component {
  constructor(props){
    super(props)
    this.state={
      option:"INACTIVE",
      standard:"INACTIVE",
      gain:"ACTIVE"
    }
  }

  switchOptions(e){
    let element = e.currentTarget.id
    this.state[element]=this.state[element] === "INACTIVE" ?"ACTIVE":"INACTIVE"
    this.setState(this.state)
  }

    render(){
        return(
          selectedCategory.getSelectedCategory().type ==="monument"?
            <div className="width33 bgw height300">
              Options
              <div>
                <form>
                  <input type="radio" name="master" value="Master 1" defaultChecked/> Master 1<br/>
                  <input type="radio" name="master" value="Master 2"/> Master 2
                </form>
              </div>
              <div>
                <div><img id="option" src={"img/TOOGLE-BTN-"+this.state.option+".png"} onClick={this.switchOptions.bind(this)}/>OPTIONS</div>
                <div><img id="standard" src={"img/TOOGLE-BTN-"+this.state.standard+".png"} onClick={this.switchOptions.bind(this)}/>STANDARD</div>
                <div><img id="gain" src={"img/TOOGLE-BTN-"+this.state.gain+".png"} onClick={this.switchOptions.bind(this)}/>GAIN/NELI</div>
              </div>
            </div>
          :
          <div className="width33 bgw height300">
            <div>  Additionnal Information</div>
            <div><b>Convection Oven Zodiac P/N</b></div>
            <div>C10x100 Left hinged door ...</div>
          </div>
        );
    }
}
