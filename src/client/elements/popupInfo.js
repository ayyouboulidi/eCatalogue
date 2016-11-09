import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'

export default class popupInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      display:false,
      tab:"desc"
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

  handleSelect(event){
    let id = event.currentTarget.id
    this.setState({tab:id})
  }


  render() {

    const backdropStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.13)',
    }
    let type = this.props.type
    let img = type === "monument" ? "/monument/GALLEY" : "/supplier/GAIN"
    let title = type === "monument" ? "GALLEY" : "GAIN"
    return (
      <span className='modal-example'>
        <span id={this.props.id} onClick={this.open.bind(this)}>{this.props.children}</span>
          <Modal id="popimg" aria-labelledby='modal-label' backdropStyle={backdropStyle} show={this.state.display} onHide={this.close.bind(this)}>
            <div>
              <h4 id='modal-label'></h4>
              <img src="img/CLOSE-ICON.png" onClick={this.close.bind(this)}/>
              <div className="modal-description">
                <div className="product-image"><img src={"img/"+img+".png"} /></div>
                <div className="product-title">{title}</div>
              </div>
              <div className="product_description">
              <div className="tablist">
              <div className={this.state.tab ==="desc" ? "tab selected" : "tab"} id="desc" onClick={this.handleSelect.bind(this)}>DESCRIPTION</div>
              <div className={this.state.tab ==="install" ? "tab selected" : "tab"}  id="install" onClick={this.handleSelect.bind(this)}>INSTALLATION</div>
              <div className={this.state.tab ==="local" ? "tab selected" : "tab"}  id="local" onClick={this.handleSelect.bind(this)}>LOCATION</div>
              <div className={this.state.tab ==="rule" ? "tab selected" : "tab"}  id="rule" onClick={this.handleSelect.bind(this)}>RULES</div>
              <div className={this.state.tab ==="other" ? "tab selected" : "tab"}  id="other" onClick={this.handleSelect.bind(this)}>OTHER</div>
              </div>
              <div className="popup_details bgwhite activeoverflow">
              {
                this.state.tab=== "desc"?
                  type === "monument" ?
                  <div>
                    <b>Galley locations</b><br/>
                    The galley locations proposed in the ADD (ATA 25.20) are defined such that optimum space can be provided to passengers in seating areas. All indications on number of trolleys are defined for typical ATLAS-based trolleys.<br/>
                    <img src="img/lamerde.png"/><br/>
                    <b>Galley types</b><br/>
                    Galleys are installed either in lateral or central positions. Only lateral galleys can have longitudinal orientation. Generally galleys are full-height (with upper attachments) and full size (39” deep), but in specific locations are offered 34” deep galleys (lateral transversal unchilled) or counter height without upper attachment (center console).<br/>
                    <b>Galley design</b><br/>
                    The structure of each galley is defined for ARINC 810 GAINs and ATLAS-based standard NELIs (refer to ADD GAINs and NELIs annexes). The master galley arrangements shown in the annex correspond to the primary level of configuration.
                    Dry and wet galleys
                    Galleys are installed as dry or wet galleys. For wet galleys, connection (refer to ADD ATA 25-30) is possible to:
                    • Potable / waste water system
                    • Fresh / extraction air system
                    • Vacuum system
                    • Cooling system
                    • Galley power supply
                    Dry galleys are not connected to any aircraft system except when they have lighting (i.e. trolley compartments and some dry galleys). These galleys can be used as storage compartments for consumables and passenger service items.
                  </div>
                  :
                  <div>
                    <b>GAIN description</b><br/>
                    This description provides an overview on Airbus design solutions for electrical galley inserts, wich are covered by ATA chapter 25-36.
                    For all A350 XWB GAINs described in this eCatalogue presents the properties and performances of the electrical galley inserts that can be selectable by Request For Change (RFC) / Specification Change Notice (SCN) procedure, through the GAINs and NELIs Definition Document. The eCatalogue content is in accordance with Standard Specifications.
                    The content of this ADD GAINs annex is arranged by ARINC sizes.

                  </div>
                :
                this.state.tab ===  "install"?
                  type === "monument"?
                  <div>install  </div>
                  :
                  <div>install</div>
                :
                this.state.tab===  "rule"?
                  type === "monument"?
                  <div>rule</div>
                  :
                  <div>
                  No specific rules
                  </div>
                :
                this.state.tab===  "local"?
                  type === "monument"?
                  <div>local  </div>
                  :
                  <div>
                  No specific location
                  </div>
                :
                this.state.tab===  "other"?
                  type === "monument"?
                    <div>other</div>
                  :
                  <div>
                    No other details supplied
                  </div>
                :
                null
              }
            </div>
            </div>
            </div>
        </Modal>
      </span>
  )
}

}
