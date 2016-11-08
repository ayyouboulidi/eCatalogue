import React, { Component } from 'react'
import popupStore from "../store/popupElement"
import UserStore from "../store/connect"
import switcherStore from "../store/switcherView"
import {Modal, Button} from 'react-bootstrap'

export default class popupImg extends Component {
  constructor(props){
    super(props)
    this.state = {
      display:false,
    }
  }

  close(){
    this.state.display = false
    this.setState(this.state);
  }

  open(e){
    let item = e.currentTarget.id
    this.state.display = true
    this.setState(this.state)
  }




  render() {

    const backdropStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.13)',
    }
    return (
      <span className='modal-example'>
        <span id={this.props.id} onClick={this.open.bind(this)}>{this.props.children}</span>
          <Modal id="popimg" aria-labelledby='modal-label' backdropStyle={backdropStyle} show={this.state.display} onHide={this.close.bind(this)}>
            <div className=" popup-img">
              <h4 id='modal-label'></h4>
              <img src="img/CLOSE-ICON.png" onClick={this.close.bind(this)}/>
              <div className="matrice-image">
                <img src={"img/matrice/"+this.props.id+".png"}/>
              </div>
            </div>
        </Modal>
      </span>
  )
}

}
