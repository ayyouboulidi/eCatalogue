import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'

export default class popupInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      display:false,
      text:{
        monument:"Galleys are installed either in lateral or central positions. Only lateral galleys can have longitudinal orientation. Generally galleys are full-height (with upper attachments) and full size (39” deep), but in specific locations are offered 34” deep galleys (lateral transversal unchilled) or counter height without upper attachment (center console).",
        equipment:"This description provides an overview on Airbus design solutions for electrical galley inserts, wich are covered by ATA chapter 25-36.For all A350 XWB GAINs described in this eCatalogue presents the properties and performances of the electrical galley inserts that can be selectable by Request For Change (RFC) / Specification Change Notice (SCN) procedure, through the GAINs and NELIs Definition Document. The eCatalogue content is in accordance with Standard Specifications.The content of this ADD GAINs annex is arranged by ARINC sizes."
      }
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
            <div className=" popup-info">
              <h4 id='modal-label'></h4>
              <img src="img/CLOSE-ICON.png" onClick={this.close.bind(this)}/>
              <div className="matrice-image">
                <div className="capitalize"><b>{this.props.type}</b></div>
                <div>{this.state.text[this.props.type]}</div>
              </div>
            </div>
        </Modal>
      </span>
  )
}

}
