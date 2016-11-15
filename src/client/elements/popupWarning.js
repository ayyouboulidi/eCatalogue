import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import UserStore from "../store/connect"
import popupStore from "../store/popupElement"
import selectedCategory from "../store/selectedCategoryStore"

export default class popupWarning extends Component {
  constructor(props){
    super(props)
    this.state = {
      display:false,
      warning:false
    }
  }

  componentWillMount(){
    let _this = this
    let user = UserStore.getUser()
    let verify = selectedCategory.getSelectedCategory().type ==="monument"? true : false
    if(verify){
      $.post('/GetProjects',{user:user},function(data){
        if(data.code === 0){
          let val = false
          data.result.map(function(item){
            if(item.item_name.charAt(0) === "G"){
              val = true
            }
          })
          _this.state.warning = val
          _this.setState(_this.state)
        }
      },"json")
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

  addProject(){
    let _this = this
    let user = UserStore.getUser()
    let item =  popupStore.getItem().id
    let obj=[{user:user,id_item:item,quantity:3}]
    $.post('/AddProjects',{projects:obj},function(data){
      if(data.code === 0){
        _this.close()
      }else if (data.code === -1){
        alert("An Error happened please try later")
      }
    },"json")
  }




  render() {

    const backdropStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.13)',
    }
    return (
      <span className='modal-example'>
        <span id={this.props.id} onClick={this.open.bind(this)}>{this.props.children}</span>
          <Modal id="popwarning" aria-labelledby='modal-label' backdropStyle={backdropStyle} show={this.state.display} onHide={this.close.bind(this)}>
            <div className=" popup-warning">
              <h4 id='modal-label'></h4>
              <img src="img/CLOSE-ICON.png" onClick={this.close.bind(this)}/>
              <div className="matrice-image">
                {this.state.warning ?<div className="center red"><b>WARNING !</b></div>:<div className="center"><b>CONFIRM</b></div>}
                <div style={{height:"20vh"}} className="center">{this.state.warning ? "Item is not compatible with you have already selected !" :"Do you want to add this Item to your project?"}</div>
                <div className="center" style={{paddingBottom:"10px"}}><input type="submit" className="view_details" onClick={this.close.bind(this)} value="Cancel"/><input type="submit" className="view_details" value="Add to my project" onClick={this.addProject.bind(this)}/></div>
              </div>
            </div>
        </Modal>
      </span>
  )
}

}
