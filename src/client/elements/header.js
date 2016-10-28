import React from 'react'
import Connectuser from './userProfile'

export default class Header extends React.Component{
  render() {
    return (
      <header>
        <div className="header_left"><img src="img/AIRBUS-LOGO.png"/><span className="main_title">{" "}My <b>airbus</b> - Online Catalog</span></div>
        <Connectuser/>
      </header>
    )
  }
}
