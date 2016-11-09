import React, { Component } from 'react'
import popupStore from "../store/popupElement"
import UserStore from "../store/connect"
import switcherStore from "../store/switcherView"
import {Modal, Button} from 'react-bootstrap'

export default class popup extends Component {
  constructor(props){
    super(props)
    this.state = {
      item:{id:null,display:false},
      display:{},
      tab:"desc"
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

  addProject(){
  /*  let _this = this
    let user = UserStore.getUser()
    let obj=[{user:user,id_item:this.state.item.id,quantity:3}]
    $.post('/AddProjects',{projects:obj},function(data){
      if(data.code === 0){
        alert("Your item had been Add ")
      }else if (data.code === -1){
        alert("An Error happened please try later")
      }
    },"json")*/
  }

  handleSelect(event){
    let id = event.currentTarget.id
    this.setState({tab:id})
  }

  render() {

    const backdropStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.13)',
    }

    let disp = this.state.item
    let type = this.props.type
    let img = type === "monument" ? "/monument/GALLEY" : "/supplier/GAIN"
    let title = type === "monument" ? "Galley G25CFA" : "CONVECTION OVEN SELL"
    let text = type === "monument" ? "Galleys is installed in D2 forward central positions with a Transversal orientation and is Aft facing, this galley is full-height (with upper attachments) and full size (39” deep)":"ELECTRICAL INSERT EUROPE PART NUMBER 6762-001-003"
    return (
      <span className='modal-example'>
      <span id={this.props.id} onClick={this.open.bind(this)}>{this.props.children}</span>
      <Modal id={"popup"+disp.id} aria-labelledby='modal-label' backdropStyle={backdropStyle} show={this.state.display[disp.id]} onHide={this.close.bind(this)}>
      <div>
      <h4 id='modal-label'></h4>
      <img src="img/CLOSE-ICON.png" onClick={this.close.bind(this)}/>
      <div className="modal-description">
      <div className="product-image"><img src={"img/"+img+".png"} /></div>
      <div className="product-title">{title}</div>
      <div className="product-short-description">{text}</div>
      </div>
      <div className="modal-action"><img src="img/FAVOURITE-ICON.png" onClick={this.addProject.bind(this)}/><img src="img/ITEM-SETTINGS-ICON.png" onClick={this.configSwitch.bind(this)}/></div>
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
          <b>Galley design</b><br/>
          The structure of the galley is defined for ARINC 810 GAINs and ATLAS-based standard NELIs (refer to category in eCatalogue for details). <br/>
          The master galley arrangements shown correspond to the primary level of configuration.<br/>
          </div>
          :
          <div>
            <b>GAIN description</b>
          Convection Oven Zodiac P/N:
          C10x100 Left hinged door
          “x” defined by Trim and Finish - see ADD Annex “Trim
          and Finish” V2523CC1100237

          Description:
          • Unpressurized oven cavity
          • Standard Convection Mode run at 170°C
          • Keep Warm Mode
          • Defrost Mode: max 170°C and max 30 min
          • Selection of Combination Modes
          • Selection of Pre set Time before Program Start
          • 27 predefined programs (Time-Temperature)
          • Up to 100 program places for user defined setups
          (Time-Temperature)
          • Large graphical display
          </div>
        :
        this.state.tab ===  "install"?
          type === "monument"?
          <div>
          <b>Upper Attachment</b><br/>
          <span>Center full height galleys have at least two upper attachments. Rail is mounted on top of the galley. A movable Bracket is installed on rail to secure various x-locations. Adjustable tie rod is attached between the bracket and fuselage structure. The galleys in door zone 1 (D1), door zone 2/3 (D2/3) and door zone 4 (D4) have different upper attachments due to the cabin geometry.</span>
          <br/>
          <b>Lower Attachment</b><br/>
          <span>All galleys are mounted on existing seat rails via a large panel. Further required attachment points consist of hard points. These hard points are attached on additional longitudinal beams which are mounted only at selected galley locations on the structural provisions existing in the standard aircraft.</span>
          <br/>
          <b>Installation limitations</b><br/>
          <span>The maximum number of galleys per aircraft and door area is limited. Limitations are due to the available system capacities and load limits for the different galley locations. The combinations of center and lateral galleys together and with other monuments are subject to case-by-case analysis.</span>
          </div>
          :
          <div>Performance
          Prepares 32 Atlas standard in-flight
          meals in 28 minutes
          Weight
          Empty: 15.1 kg
          Gross: 39.1 kg
          Power consumption Max 3200 W
          Internal capacity
          - Cavity accommodates 1 standard
          ARINC 810 oven carrier (32 meals)
          - Cavity dimensions:
          H = 419 mm (16.50 in)
          W = 231,8 mm (9.13 in)
          D = 414 mm (16.30 in)
          GMTBUR 15000 FH
          </div>
        :
        this.state.tab===  "rule"?
          type === "monument"?
          <div>
          Steam or convection ovens cannot be combined within the same configuration except when sink or GWDU are selected.All centre galleys at Door 2 can only have one ARINC Size 4
          </div>
          :
          <div>
          No specific rules
          </div>
        :
        this.state.tab===  "local"?
          type === "monument"?
          <div>
          <img src="img/position.png"/>
          </div>
          :
          <div>
          No specific location
          </div>
        :
        this.state.tab===  "other"?
          type === "monument"?
            <div>
            <b>Power supply and cooling capacity</b><br/>
            Available galley power supply capacity is available in the associated description<br/>
            <li> Center galleys are always chilled galleys.</li>
            <br/>
            <b>Galley gross weight</b><br/>
            The weight of every galley configuration has to be checked after the selection of all GAINs, NELIs, galley options and other equipments (baby bassinet, IFE screen...) to ensure the allowed gross weight is not exceeded. If there is no comment for the galley configuration, the NELI weights are given as follows:<br/>
            <li>Standard Units (SU): 10kg (upper row) / 15kg (middle row) / 20kg (lower row)</li>
            <li> Half-size trolleys:</li>
            <li>a) 50 kg for all lateral galleys and all galleys fwd D1</li>
            <li>b) 60 kg for all center galleys (except fwd D1) and all galleys aft D4.</li>
            <li> Full-size trolleys: 100kg </li>
            Exception to the general rule may be accepted up to 20kg for SUs and 60kg for HS trolleys. The technical feasibility has to be checked on a case-by-case basis.<br/>
            <b>Handling space</b><br/>
            To ensure that the trolley can be pulled out of its bay and can be easily handled, the minimum distance between two facing galleys is 39”.
    The applicability of full-size trolleys in lateral galleys is always depending on the layout (aisle width).<br/>
            <b>Single trolley bays</b><br/>
            <li> Half-size trolleys:</li>
            <li>a) 50 kg for all lateral galleys and all galleys fwd D1</li>
            <li>b) 60 kg for all center galleys (except fwd D1) and all galleys aft D4.</li>
            <li> Full-size trolleys: 100kg </li>
            </div>
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
