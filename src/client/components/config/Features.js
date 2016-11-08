import React, { Component } from 'react'
import selectedCategory from "../../store/selectedCategoryStore"
import masterStore from "../../store/masterStore"
import {RadioGroup,Radio} from "react-radio-group"

export default class Features extends Component {
  constructor(props){
    super(props)
    this.state={
      master1:"ACTIVE",
      master2:"INACTIVE",
      options:false,
      standard:false,
      gain:true,
      selectedValue:"gain"
    }
  }

  switchOptions(e){
    let element = e.currentTarget.id
    this.state[element]=this.state[element] === "INACTIVE" ?"ACTIVE":"INACTIVE"
    this.setState(this.state)
    this.updateStore()
  }

handleChange(newValue){
  this.state.selectedValue = newValue
  this.state.standard=this.state.options=this.state.gain=false
  this.state[newValue]=true
  this.setState(this.state)
  this.updateStore()
}

updateStore(){
  let master1 = this.state.master1 === "INACTIVE"?false:true
  let master2 = this.state.master2 === "INACTIVE"?false:true
  let options = this.state.options
  let standard = this.state.standard
  let gain = this.state.gain
  masterStore.setMaster({master1:master1,master2:master2,options:options,standard:standard,gain:gain})
}

    render(){
        return(
          selectedCategory.getSelectedCategory().type ==="monument"?
            <div className="width33 bgw height300 features">
              <div className="title">Options</div>
              <div className="options">
                <form>
                <div><img id="master1" src={"img/TOOGLE-BTN-"+this.state.master1+".png"} onClick={this.switchOptions.bind(this)}/>Master 1</div>
                <div><img id="master2" src={"img/TOOGLE-BTN-"+this.state.master2+".png"} onClick={this.switchOptions.bind(this)}/>Master 2</div>
                </form>
              </div>
              <div className="options">
              <RadioGroup name="options" selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this)}>
                <Radio value="standard" />Standard<br/>
                <Radio value="options" />Options<br/>
                <Radio value="gain" />GAIN/NELI
              </RadioGroup>
              </div>
              <div className="package switch-button blue rounded-box">Package</div>
            </div>
          :
          <div className="width33 bgw height300 features">
            <div className="features-additional-infos title">  Additionnal Information</div>
            <div className="name"><b>Convection Oven Zodiac P/N</b></div>
            <div className="description">
              • Unpressurized oven cavity<br/>
              • Standard Convection Mode run at 170°C<br/>
              • Keep Warm Mode<br/>
              • Defrost Mode: max 170°C and max 30 min<br/>
              • Selection of Combination Modes<br/>
              • Selection of Pre set Time before Program Start<br/>
              • 27 predefined programs (Time-Temperature)<br/>
              • Up to 100 program places for user defined setups(Time-Temperature)<br/>
              • Large graphical display<br/>
            </div>
          </div>
        );
    }
}
