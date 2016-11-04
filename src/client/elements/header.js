import React, { Component } from 'react'
import { Link } from 'react-router'
import UserProfile from './userProfile'
import connectStore from '../store/connect'

export default class Header extends Component{
  render() {
    let content = "";
    if(connectStore.getUser() != undefined){
      content = <span className="main_title">{" "}My <b>airbus</b> - Online Catalog</span>;
    }
    return (
      <header>
        <div className="header_left"><Link to="/"><img src="img/AIRBUS-LOGO.png"/></Link>{content}</div>
        <UserProfile/>
      </header>
    )
  }
}
