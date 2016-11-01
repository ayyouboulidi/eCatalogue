import React, { Component } from 'react'
import popupStore from "../store/popupElement"
import {Modal, Button} from 'react-bootstrap'

export default class popup extends Component {
  constructor(props){
    super(props)
    this.state = {
      item:{id:null,display:false}
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



  render() {

    const backdropStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.13)',
    }

    return (
      <span className='modal-example'>
        <span id={this.props.id} onClick={this.open.bind(this)}>{this.props.children}</span>
        <Modal id="popup" aria-labelledby='modal-label' backdropStyle={backdropStyle} show={this.state.item.display} onHide={this.close.bind(this)}>
          <div>
            <h4 id='modal-label'></h4>
            <img src="img/CHECKED-ICON.png" onClick={this.close.bind(this)}/>
            <div>blablab blba {this.state.item.id}</div>
          </div>
        </Modal>
      </span>
    )
  }

}
