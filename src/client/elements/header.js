import React, { Component } from 'react'
import { Link } from 'react-router'
import UserProfile from './userProfile'

export default class Header extends Component{
  render() {
    return (
      <header>
        <div className="header_left"><Link to="/"><img src="img/AIRBUS-LOGO.png"/></Link><span className="main_title">{" "}My <b>airbus</b> - Online Catalog</span></div>
        <UserProfile/>
      </header>
    )
  }
}
