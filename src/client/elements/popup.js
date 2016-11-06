import React, { Component } from 'react'
import popupStore from "../store/popupElement"
import switcherStore from "../store/switcherView"
import {Modal, Button} from 'react-bootstrap'

export default class popup extends Component {
  constructor(props){
    super(props)
    this.state = {
      item:{id:null,display:false},
      display:{}
    }
  }

  close(){
    this.state.item.display = false
    this.setState(this.state);
    popupStore.resetItem()
  }

  open(e){
    let item = e.currentTarget.id
    popupStore.setItem({id:item,display:true})
    this.state.display[item] = true
    this.setState(this.state)
  }

  componentWillMount(){
    this.setState({item:popupStore.getItem()})
  }

  componentDidMount() {
    this.disposable = popupStore.getStore$().subscribe((newView) => {
      this.state.item = newView;
      this.setState(this.state);
    })
  }

  componentWillUnmount() {
    this.disposable.dispose()
  }

configSwitch(){
  switcherStore.setView("Config")
}

handleSelect(event){
  console.log(event.currentTarget.getAttribute(name))

}

  render() {

    const backdropStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.13)',
    }

    let disp = this.state.item
    let type = this.props.type
    let img = type === "monument" ? "/monument/GALLEY" : "/supplier/GAIN"
    let title = type === "monument" ? "Galley G25CFA" : "CONVECTION OVEN SELL"
    return (
      <span className='modal-example'>
        <span id={this.props.id} onClick={this.open.bind(this)}>{this.props.children}</span>
        <Modal id={"popup"+disp.id} aria-labelledby='modal-label' backdropStyle={backdropStyle} show={this.state.display[disp.id]} onHide={this.close.bind(this)}>
          <div>
            <h4 id='modal-label'></h4>
            <img src="img/CLOSE-ICON.png" onClick={this.close.bind(this)}/>
            <div className="modal-description">
              <div className="product-image"><img style={{width:"60px"}} src={"img/"+img+".png"} /></div>
              <div className="product-title">{title}</div>
              <div className="product-short-description">ELECTRICAL INSERT EUROPE PART NUMBER 6762-001-003</div>
            </div>
            <div  style={{background:"green"}}><img src="img/FAVOURITE-ICON.png"/><img src="img/ITEM-SETTINGS-ICON.png" onClick={this.configSwitch.bind(this)}/></div>
            <div className="aircraft_description">
                <div className="tablist">
                    <div className="tab" name="desc" onClick={this.handleSelect.bind(this)}>DESCRIPTION</div>
                    <div className="tab" name="install" onClick={this.handleSelect.bind(this)}>INSTALATION</div>
                    <div className="tab" name="local" onClick={this.handleSelect.bind(this)}>LOCALISATION</div>
                    <div className="tab" name="rule" onClick={this.handleSelect.bind(this)}>RULES</div>
                    <div className="tab" name="other" onClick={this.handleSelect.bind(this)}>OTHER</div>
                </div>
                <div className="aircraft_details height250 bgwhite activeoverflow">
                  <b>Convection Oven Zodiac P/N</b><br/>
                  C10x100 Left hinged door<br/>
                  C10x200 Right hinged door<br/>
                  "x" defined by Trim and Finish<br/>
                  see ADD Annex "Trim and Finish"<br/>
                  V2523CC1100237<br/>
                  <br/>
                  <b>Description</b><br/>
                  <li>Unpressurized oven cavity</li>
                  <li>Standard Convection Mode run at 170°</li>
                  <li>Keep Warm Mode</li>
                  <li>Defrost Mode: max 170° and max 30 min</li>
                  <li>Selection of Combination Modes</li>
                  <li>Selection of Pre set Time before Program Start</li>
                  <li>27 predefined programs (Time-Temperature)</li>
                  <li>Up to 100 program places for user defined setups (Time-Temperature)</li>
                  <li>Large graphical display</li>
                </div>
            </div>
          </div>
        </Modal>
      </span>
    )
  }

}
