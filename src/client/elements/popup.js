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
    let _this = this
    let user = UserStore.getUser()
    let obj={user:user,id_item:this.state.item.id,quantity:3}
    $.post('/AddProjects',obj,function(data){
      if(data.code === 0){
        alert("Your item had been Add ")
      }else if (data.code === -1){
        alert("An Error happened please try later")
      }
    },"json")
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
      <div  style={{background:"green"}}><img src="img/FAVOURITE-ICON.png" onClick={this.addProject.bind(this)}/><img src="img/ITEM-SETTINGS-ICON.png" onClick={this.configSwitch.bind(this)}/></div>
      <div className="aircraft_description">
      <div className="tablist">
      <div className={this.state.tab ==="desc" ? "tab selected" : "tab"} id="desc" onClick={this.handleSelect.bind(this)}>DESCRIPTION</div>
      <div className={this.state.tab ==="install" ? "tab selected" : "tab"}  id="install" onClick={this.handleSelect.bind(this)}>INSTALATION</div>
      <div className={this.state.tab ==="local" ? "tab selected" : "tab"}  id="local" onClick={this.handleSelect.bind(this)}>LOCALISATION</div>
      <div className={this.state.tab ==="rule" ? "tab selected" : "tab"}  id="rule" onClick={this.handleSelect.bind(this)}>RULES</div>
      <div className={this.state.tab ==="other" ? "tab selected" : "tab"}  id="other" onClick={this.handleSelect.bind(this)}>OTHER</div>
      </div>
      <div className="popup_details bgwhite activeoverflow">
      {
        this.state.tab=== "desc"?
        <div>
        <b>Galley design</b><br/>
        The structure of the galley is defined for ARINC 810 GAINs and ATLAS-based <br/>
        standard NELIs (refer to category in eCatalogue for details). <br/>
        The master galley arrangements shown correspond to the primary level of configuration.<br/>
        </div>
        :
        this.state.tab===  "install"?
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
        this.state.tab===  "rule"?
        <div>
        Steam or convection ovens cannot be combined within the same configuration except when sink or GWDU are selected.All centre galleys at Door 2 can only have one ARINC Size 4
        </div>
        :
        this.state.tab===  "local"?
        <div>
        <img src="img/position.png"/>
        </div>
        :
        this.state.tab===  "other"?
        <div>
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
